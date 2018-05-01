import { Component, OnInit } from '@angular/core';
import {ValidationManager} from 'ng2-validation-manager';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html'
})
export class ForgottenPasswordComponent implements OnInit {
  forgottenPasswordForm: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.forgottenPasswordForm = new ValidationManager({
      email: 'required|email'
    });
  }

  requestPassword() {
    console.log(this.forgottenPasswordForm.formGroup.value);
  }
}
