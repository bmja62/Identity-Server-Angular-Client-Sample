import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';






@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    BrowserModule,
    AuthCallbackComponent
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  declarations: [AuthCallbackComponent],
})
export class SharedModule { }
