import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {NumbersTableComponent} from './numbers-table/numbers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
