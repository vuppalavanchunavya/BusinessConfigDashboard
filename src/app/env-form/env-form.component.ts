import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EnvConfigService } from '../services/env-config.service';
import { JsonPipe, NgFor, NgIf, CommonModule, KeyValue } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TooltipComponent } from './tooltip.component';
import { EnvPreviewComponent } from '../env-preview/env-preview.component'; // Import EnvPreviewComponent

interface ConfigField {
  name: string;
  type: string;
  required: boolean;
  defaultValue: any;
  currentValue: any;
  description: string;
  placeholder?: string;
  options?: string[];
}

interface ConfigGroup {
  [key: string]: ConfigField[];
}

@Component({
  selector: 'app-env-form',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule,
    NgFor, NgIf, JsonPipe, CommonModule, MatDialogModule, TooltipComponent, EnvPreviewComponent
  ],
  providers: [EnvConfigService],
  templateUrl: './env-form.component.html',
  styleUrl: './env-form.component.scss'
})
export class EnvFormComponent implements OnInit {
  envForm: FormGroup = new FormGroup({});
  groupedFields: ConfigGroup = {};

  constructor(private fb: FormBuilder, private configService: EnvConfigService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe((config: ConfigGroup) => {
      this.groupedFields = config;
      this.envForm = this.fb.group(this.createFormGroup(config));
    });
  }

  createFormGroup(config: ConfigGroup): any {
    const group: any = {};
    for (const category in config) {
      if (config.hasOwnProperty(category)) {
        config[category].forEach((field: ConfigField) => {
          let value = field.currentValue || field.defaultValue;
          if (field.type === 'boolean') {
            value = value === 'true' || value === true; // Ensure boolean type
          }
          group[field.name] = [value];
        });
      }
    }
    return group;
  }

  onSubmit(): void {
    if (this.envForm.valid) {
      return;
      const dialogRef = this.dialog.open(ConfirmationDialog, {
        data: { formData: this.envForm.value }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.configService.saveConfig(this.envForm.value).subscribe(response => {
            console.log('Configuration saved', response);
          });
        }
      });
    }
  }

  // Sort the form fields in the order they appear in the JSON (from the backend)
  originalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => 0;
}

// Add a new component for the confirmation dialog
@Component({
  selector: 'confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, JsonPipe],
  template: `
    <h1 mat-dialog-title>Confirm Configuration</h1>
    <div mat-dialog-content>
      <pre>{{ data.formData | json }}</pre>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onConfirmClick()">Confirm</button>
    </div>
  `,
})
export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}