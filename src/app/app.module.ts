import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { CardComponent } from './card/card.component';
import { MyMaterialModule } from './mymaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastService } from './forecast.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    CardComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ ForecastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
