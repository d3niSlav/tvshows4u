import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CmsRoutingModule } from '../cms-routing.module';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { EditSeasonComponent } from './edit-season/edit-season.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { TvShowsComponent } from './tv-shows.component';
import { TvShowsService } from './tv-shows.service';
import { ShowsListComponent } from './shows-list/shows-list.component';

@NgModule({
  declarations: [
    EditEpisodeComponent,
    EditSeasonComponent,
    EditShowComponent,
    ShowsListComponent,
    TvShowsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmsRoutingModule
  ],
  exports: [
    TvShowsComponent
  ],
  providers: [
    TvShowsService
  ]
})
export class TvShowsModule { }
