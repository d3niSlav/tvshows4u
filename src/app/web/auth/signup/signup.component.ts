import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signUpData = { email: '', password: '' };
  message = { email: '', password: '' };
  data: any;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    this.authService.registerUser(this.signUpData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.authService.setIsUserAuthenticated(!!resp);
      this.router.navigate(['']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
