import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { NavigationLogoComponent } from './navigation-logo/navigation-logo.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainNavigationComponent,
    MobileMenuComponent,
    NavigationLogoComponent,
    SubNavigationComponent,
    UserNavigationComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
