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
import { ShowsService } from './shows/shows.service';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AboutUsModule} from './about-us/about-us.module';
import { FutureDevComponent } from './future-dev/future-dev.component';

@NgModule({
  declarations: [
    WebComponent,
    SearchComponent,
    ModalComponent,
    NotFoundComponent,
    FutureDevComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AboutUsModule,
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
