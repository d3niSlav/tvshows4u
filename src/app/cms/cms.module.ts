import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { TvShowsService } from './services/tv-shows.service';
import { NavigationComponent } from './navigation/navigation.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { EditShowComponent } from './tv-shows/edit-show/edit-show.component';
import { EditSeasonComponent } from './tv-shows/edit-season/edit-season.component';
import { EditEpisodeComponent } from './tv-shows/edit-episode/edit-episode.component';
import { ShowsListComponent } from './tv-shows/shows-list/shows-list.component';

@NgModule({
  declarations: [
    CmsComponent,
    NavigationComponent,
    TvShowsComponent,
    EditShowComponent,
    EditSeasonComponent,
    EditEpisodeComponent,
    ShowsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmsRoutingModule
  ],
  providers: [
    TvShowsService
  ],
})

export class CmsModule {}
