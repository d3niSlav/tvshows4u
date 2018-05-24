import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgottenPasswordComponent } from './auth/forgotten-password/forgotten-password.component';
import { ShowsComponent } from './shows/shows.component';

const webRoutes: Routes = [
  { path: '', component: WebComponent, children: [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'forgotten', component: ForgottenPasswordComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'shows', component: ShowsComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(webRoutes)
  ],
  exports: [RouterModule]
})
export class WebRoutingModule {}
