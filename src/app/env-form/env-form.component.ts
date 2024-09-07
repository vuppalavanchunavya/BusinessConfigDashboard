import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EnvConfigService } from '../services/env-config.service';
import { JsonPipe, NgFor, NgIf, CommonModule, KeyValue } from '@angular/common'; // Import CommonModule

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
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, NgFor, NgIf, JsonPipe, CommonModule], // Add CommonModule to imports
  providers: [EnvConfigService],
  templateUrl: './env-form.component.html',
  styleUrl: './env-form.component.scss'
})
export class EnvFormComponent implements OnInit {
  envForm: FormGroup = new FormGroup({});
  groupedFields: ConfigGroup = {};

  constructor(private fb: FormBuilder, private configService: EnvConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe((config: ConfigGroup) => {
      console.log(config);
      this.groupedFields = config;
      this.envForm = this.fb.group(this.createFormGroup(config));
    });
  }

  createFormGroup(config: ConfigGroup): any {
    const group: any = {};
    for (const category in config) {
      if (config.hasOwnProperty(category)) {
        config[category].forEach((field: ConfigField) => {
          group[field.name] = [field.currentValue || field.defaultValue];
        });
      }
    }
    return group;
  }

  onSubmit(): void {
    console.log(this.envForm.value);
    this.configService.saveConfig(this.envForm.value).subscribe(response => {
      console.log('Configuration saved', response);
    });
  }

  originalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return 0; // Maintain original order
  }
}