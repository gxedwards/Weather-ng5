import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
   this.dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {  }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}