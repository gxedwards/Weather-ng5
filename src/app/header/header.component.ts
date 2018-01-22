import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent} from '../dialog/dialog.component';
import {AppService} from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog, private appService: AppService) {}

  ngOnInit() {
  }

  openDialog(): void {
   this.dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {  }
    });

   const sub = this.dialogRef.componentInstance.onAdd.subscribe((data) => {
     this.appService.addForecast(data);
   } );

    this.dialogRef.afterClosed().subscribe(result => {
      // unsubscribe now we are closing the dialog
      sub.unsubscribe();
    });
  }

  refresh(): void {

  }

}
