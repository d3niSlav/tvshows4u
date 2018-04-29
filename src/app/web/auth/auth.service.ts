import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService implements OnInit {
  isUserAuthenticated: false;
  userAuthenticationChanged = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

  checkIfUserIsAuthenticated() {
    return !!localStorage.getItem('jwtToken');
  }

  registerUser(userData) {
    return this.http.post('/api/users', userData);
  }

  loginUser(userData) {
    return this.http.post('/api/users/login', userData);
  }

  getUser() {
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };
    return this.http.get('/api/users', httpOptions);
  }

  setIsUserAuthenticated(isUserAuthenticated) {
    this.isUserAuthenticated = isUserAuthenticated;
    this.userAuthenticationChanged.next(this.isUserAuthenticated);
  }
}
