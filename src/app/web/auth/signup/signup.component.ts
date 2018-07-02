import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signUpForm: any;
  data: any;
  messages: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new ValidationManager({
      email: 'required|email',
      password: 'required|rangeLength:8,50',
      confirmPassword: 'required|equalTo:password'
    });

    this.signUpForm.setErrorMessage('confirmPassword', 'equalTo', 'Passwords does not match!');
    this.signUpForm.setErrorMessage('confirmPassword', 'required', 'Confirm your password');

    this.messages = {
      email: null,
      password: null
    };
  }

  signUp() {
    const userData = {...this.signUpForm.formGroup.value};
    delete userData.confirmPassword;

    this.messages = {};
    this.authService.registerUser(userData).subscribe((response: Response) => {
        this.data = response;
        sessionStorage.setItem('jwtToken', this.data.token);
        this.authService.setCurrentUser(response);
        this.router.navigate(['/']);
      }, error => {
        this.authService.logout();
        this.messages.email = error.error.email;
        this.messages.password = error.error.password;
      }
    );
  }
}
