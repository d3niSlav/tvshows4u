import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SharedModule } from './shared/shared.module';
import { ShowsModule } from './shows/shows.module';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { HomeModule } from './home/home.module';
import {ShowsService} from './shows/shows.service';

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    ContactFormModule,
    HeaderModule,
    ProfileModule,
    ScheduleModule,
    SharedModule,
    ShowsModule,
    WebRoutingModule
  ],
  providers: [
    ShowsService
  ],
  exports: [
    SharedModule
  ]
})

export class WebModule {}
