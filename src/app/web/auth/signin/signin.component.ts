import { Component, OnInit } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  signInForm: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signInForm = new ValidationManager({
      email: 'required|email',
      password: 'required|rangeLength:8,50'
    });
  }

  signIn() {
    console.log(this.signInForm.formGroup.value);
  }
}

