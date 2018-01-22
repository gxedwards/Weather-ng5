import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { CardComponent } from './card/card.component';
import { MyMaterialModule } from './mymaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastService } from './forecast.service';
import {AppService} from './app.service';


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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ ForecastService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
