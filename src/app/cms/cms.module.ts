import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    CmsComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    TvShowsModule,
    UsersModule
  ]
})
export class CmsModule {}
