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
  data: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signInForm = new ValidationManager({
      email: 'required|email',
      password: 'required|rangeLength:8,50'
    });
  }

  signIn() {
    const userData = {...this.signInForm.formGroup.value};

    this.authService.loginUser(userData).subscribe(response => {
      this.data = response;
      sessionStorage.setItem('jwtToken', this.data.token);
      this.authService.setIsUserAuthenticated(!!response);
      this.router.navigate(['/']);
    }, error => {
      this.authService.setIsUserAuthenticated(false);
    });
  }
}

