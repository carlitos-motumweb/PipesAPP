import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {LOCALE_ID} from '@angular/core';

import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe'

import {ToggleButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
      FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ToggleButtonModule
  ],
  providers: [{
      provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
