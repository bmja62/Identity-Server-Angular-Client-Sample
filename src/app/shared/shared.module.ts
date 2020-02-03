import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardService } from './services/authguard.service';




@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    BrowserModule
  ],
  providers: [
    AuthguardService
  ],
  declarations: [],
})
export class SharedModule { }
