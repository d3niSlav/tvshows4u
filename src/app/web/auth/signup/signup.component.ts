import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signUpForm: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signUpForm = new ValidationManager({
      email: 'required|email',
      password: 'required|rangeLength:8,50',
      confirmPassword: 'required|equalTo:password'
    });

    this.signUpForm.setErrorMessage('confirmPassword', 'equalTo', 'Passwords does not match!');
    this.signUpForm.setErrorMessage('confirmPassword', 'required', 'Confirm your password');
  }

  signUp() {
    console.log(this.signUpForm.getForm().valid);
    // this.authService.registerUser(this.signUpData).subscribe(resp => {
    //   this.data = resp;
    //   localStorage.setItem('jwtToken', this.data.token);
    //   this.authService.setIsUserAuthenticated(!!resp);
    //   this.router.navigate(['']);
    // }, err => {
    //   this.message = err.error.msg;
    // });
  }
}
