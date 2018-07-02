import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { AuthService } from './auth.service';
import { AuthSubmitComponent } from './auth-submit/auth-submit.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { InputWithErrorComponent } from './input-with-error/input-with-error.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    AuthModalComponent,
    AuthSubmitComponent,
    InputWithErrorComponent,
    ForgottenPasswordComponent,
    ResetPasswordComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule
  ],
  exports: [
    AuthModalComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
