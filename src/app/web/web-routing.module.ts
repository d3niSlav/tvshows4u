import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgottenPasswordComponent } from './auth/forgotten-password/forgotten-password.component';
import { ShowsComponent } from './shows/browse-shows/shows.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SingleShowComponent } from './shows/single-show/single-show.component';
import { SeasonComponent } from './shows/single-show/season/season.component';
import { CommentsListComponent } from './shows/single-show/comments-list/comments-list.component';
import { TrailerComponent } from './shows/single-show/trailer/trailer.component';
import { NewestShowsComponent } from './shows/newest-shows/newest-shows.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PersonalShowsComponent } from './profile/personal-shows/personal-shows.component';
import {RatedShowsComponent} from './shows/rated-shows/rated-shows.component';

const webRoutes: Routes = [
  { path: '', component: WebComponent, children: [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'forgotten', component: ForgottenPasswordComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'shows', component: ShowsComponent },
    { path: 'newest', component: NewestShowsComponent },
    { path: 'show/:id', component: SingleShowComponent, children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: SeasonComponent },
      { path: 'comments', component: CommentsListComponent },
      { path: 'trailer', component: TrailerComponent }
    ]},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'shows', pathMatch: 'full' },
      { path: 'shows', component: PersonalShowsComponent}
    ]},
    { path: 'contacts', component: ContactFormComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'ranking', component: RatedShowsComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(webRoutes)
  ],
  exports: [RouterModule]
})
export class WebRoutingModule {}
