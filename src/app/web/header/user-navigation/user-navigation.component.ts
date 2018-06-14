import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent implements OnInit, OnDestroy {
  isUserAuthenticated = false;
  subscription: Subscription;

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
    this.isUserAuthenticated = this.authService.isUserLoggedIn();
    this.subscription = this.authService.userAuthenticationChanged
      .subscribe(
        (user: any) => {
          this.isUserAuthenticated = !!user;
        }
      );
  }

  onLogout() {
    sessionStorage.removeItem('jwtToken');
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
