import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { MainNavigationComponent } from './header/main-navigation/main-navigation.component';
import { SubNavigationComponent } from './header/sub-navigation/sub-navigation.component';
import { NavigationLogoComponent } from './header/navigation-logo/navigation-logo.component';
import { UserNavigationComponent } from './header/user-navigation/user-navigation.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    WebComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    MobileMenuComponent,
    MainNavigationComponent,
    SubNavigationComponent,
    NavigationLogoComponent,
    UserNavigationComponent,
    AuthModalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule
  ],
  providers: [
    AuthService
  ]
})

export class WebModule {}
