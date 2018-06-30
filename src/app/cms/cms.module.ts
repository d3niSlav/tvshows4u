import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { ActorsModule } from './actors/actors.module';
import { CmsLoginComponent } from './auth/cms-login/cms-login.component';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    CmsComponent,
    NavigationComponent,
    CmsLoginComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    TvShowsModule,
    UsersModule,
    ContactsModule,
    ActorsModule,
    CommentsModule
  ]
})
export class CmsModule {}
