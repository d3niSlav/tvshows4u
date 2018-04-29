import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import {HomeComponent} from './home/home.component';

const webRoutes: Routes = [
  { path: '', component: WebComponent, children: [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(webRoutes)
  ],
  exports: [RouterModule]
})
export class WebRoutingModule {}
