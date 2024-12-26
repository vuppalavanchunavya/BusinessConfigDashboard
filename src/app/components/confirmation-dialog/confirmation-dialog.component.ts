import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';
import { EnvFormComponent } from '../env-form/env-form.component';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, JsonPipe, EnvFormComponent],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}