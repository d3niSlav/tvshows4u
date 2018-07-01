import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, OnDestroy{
  isHamburgerMenuOpen: boolean = false;
  isUserAuthenticated: boolean = false;
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

  openHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
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
