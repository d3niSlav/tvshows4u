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
import { ActorComponent } from './shows/single-show/actor/actor.component';
import { ShowNavigationComponent } from './shows/single-show/show-navigation/show-navigation.component';
import { CommentsListComponent } from './shows/single-show/comments-list/comments-list.component';
import { ShowsWithRatingComponent } from './shared/tv-shows/shows-with-rating/shows-with-rating.component';
import { SuggestedShowsComponent } from './shared/tv-shows/suggested-shows/suggested-shows.component';
import { FeaturedShowsComponent } from './shared/tv-shows/featured-shows/featured-shows.component';
import { NewestShowsComponent } from './shows/newest-shows/newest-shows.component';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { StarsComponent } from './shared/tv-shows/stars/stars.component';
import { CommentFormComponent } from './shows/single-show/comments-list/comment-form/comment-form.component';
import { SingleCommentComponent } from './shows/single-show/comments-list/single-comment/single-comment.component';
import { SingleShowService } from './shows/single-show/single-show.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './contact-form/contact.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { DayBoxComponent } from './schedule/day-box/day-box.component';
import { ScheduleService } from './schedule/schedule.service';
import { ShowsListComponent } from './profile/personal-shows/shows-list/shows-list.component';
import { PersonalShowsComponent } from './profile/personal-shows/personal-shows.component';
import { PersonalShowComponent } from './profile/personal-shows/shows-list/personal-show/personal-show.component';
import { RatedShowsComponent } from './shows/rated-shows/rated-shows.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileInputFieldComponent } from './profile/edit-profile/profile-input-field/profile-input-field.component';
import { ProfileEditFormComponent } from './profile/edit-profile/profile-edit-form/profile-edit-form.component';
import { FilterArrayPipe } from '../shared/pipes/filter-array.pipe';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    SortPipe,
    FilterArrayPipe,
    TruncatePipe,
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
    TrailerComponent,
    ActorComponent,
    ShowNavigationComponent,
    CommentsListComponent,
    ShowsWithRatingComponent,
    SuggestedShowsComponent,
    FeaturedShowsComponent,
    NewestShowsComponent,
    StarsComponent,
    CommentFormComponent,
    SingleCommentComponent,
    ContactFormComponent,
    ScheduleComponent,
    DayBoxComponent,
    ShowsListComponent,
    PersonalShowsComponent,
    PersonalShowComponent,
    RatedShowsComponent,
    EditProfileComponent,
    ProfileInputFieldComponent,
    ProfileEditFormComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebRoutingModule
],
  exports: [
    TruncatePipe
  ],
  providers: [
    AuthService,
    AuthGuard,
    ShowsService,
    SingleShowService,
    ProfileService,
    ContactService,
    ScheduleService
  ]
})

export class WebModule {}
