import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService implements OnInit {
  currentUser = null;
  userAuthenticationChanged = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

  isUserLoggedIn(): boolean {
    return !!this.currentUser;
  }

  registerUser(userData) {
    return this.http.post('/api/users', userData);
  }

  loginUser(userData) {
    return this.http.post('/api/users/login', userData);
  }

  getUser(token) {
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': token})
    };
    return this.http.get('/api/users', httpOptions);
  }

  setCurrentUser(user) {
    this.currentUser = user;
    this.userAuthenticationChanged.next(true);
  }

  logout() {
    this.currentUser = null;
    this.userAuthenticationChanged.next(false);
  }
}
