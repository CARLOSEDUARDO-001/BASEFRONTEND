import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SCFN01Component } from './SCFN01/SCFN01.component';
import { SCFN02Component } from './scfn02/scfn02.component';

@NgModule({
  declarations: [
    AppComponent,SCFN01Component, SCFN02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }