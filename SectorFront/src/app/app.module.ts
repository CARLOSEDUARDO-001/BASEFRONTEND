import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SCFN01Component } from './SeccionFrontEnd/SCFN01/SCFN01.component';
import { SCFN02Component } from './SeccionFrontEnd/scfn02/scfn02.component';
import { Scin01Component } from './SeccionIngles/scin01/scin01.component';
import { Scin02Component } from './SeccionIngles/scin02/scin02.component';

@NgModule({
  declarations: [
    AppComponent,SCFN01Component, SCFN02Component, Scin01Component, Scin02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }