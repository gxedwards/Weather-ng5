import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(form)">
      <h1 mat-dialog-title>Add a new city</h1>
      <mat-dialog-content>
        <mat-select placeholder="Pick a city" [(ngModel)]="selectedCity" name="city">
          <mat-option *ngFor="let option of options" [value]="option.value">
            {{ option.name }}
          </mat-option>
        </mat-select>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="submit">Add</button>
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
      </mat-dialog-actions>
    </form>
  `
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  selectedCity: string;

  options = [
    {value: '2357536', name: 'Austin, TX'},
    {value: '2367105', name: 'Boston, MA'},
    {value: '2379574', name: 'Chicago, IL'},
    {value: '2459115', name: 'New York, NY'},
    {value: '2475687', name: 'Portland, OR'},
    {value : '2487956', name: 'San Francisco, CA'},
    {value : '2490383', name: 'Seattle, WA'}
  ];


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: this.data.city ? this.data.city : ''
    });
  }


  submit(form) {
    this.dialogRef.close(`${form.value.city}`);
  }
}
