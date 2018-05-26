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
import { InputWithErrorComponent } from './auth/input-with-error/input-with-error.component';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { ForgottenPasswordComponent } from './auth/forgotten-password/forgotten-password.component';
import { AuthSubmitComponent } from './auth/auth-submit/auth-submit.component';
import { TvShowCardComponent } from './shared/tv-show-card/tv-show-card.component';
import { ShowsComponent } from './shows/browse-shows/shows.component';
import { LinkButtonComponent } from './shared/buttons/link-button/link-button.component';
import { PosterComponent } from './shared/tv-shows/poster/poster.component';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { FiltersComponent } from './shows/browse-shows/filters/filters.component';
import { OrderComponent } from './shows/browse-shows/filters/order/order.component';
import { CategoriesComponent } from './shows/browse-shows/filters/categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth-guard.service';
import { ProfileService } from './profile/profile.service';
import { UserCardComponent } from './profile/user-card/user-card.component';
import { ShowsService } from './shows/shows.service';
import { SeasonComponent } from './shows/single-show/season/season.component';
import { SingleShowComponent } from './shows/single-show/single-show.component';
import { EpisodeComponent } from './shows/single-show/season/episode/episode.component';
import { TrailerComponent } from './shows/single-show/trailer/trailer.component';

@NgModule({
  declarations: [
    SortPipe,
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
    HomeComponent,
    InputWithErrorComponent,
    AuthLayoutComponent,
    ForgottenPasswordComponent,
    AuthSubmitComponent,
    TvShowCardComponent,
    ShowsComponent,
    LinkButtonComponent,
    PosterComponent,
    FiltersComponent,
    OrderComponent,
    CategoriesComponent,
    ProfileComponent,
    UserCardComponent,
    SeasonComponent,
    SingleShowComponent,
    EpisodeComponent,
    TrailerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebRoutingModule
],
  providers: [
    AuthService,
    AuthGuard,
    ShowsService,
    ProfileService
  ]
})

export class WebModule {}
