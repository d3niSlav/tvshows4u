import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { EditShowComponent } from './tv-shows/edit-show/edit-show.component';
import { CmsComponent } from './cms.component';
import { ShowsListComponent } from './tv-shows/shows-list/shows-list.component';
import { EditSeasonComponent } from './tv-shows/edit-season/edit-season.component';
import {EditEpisodeComponent} from './tv-shows/edit-episode/edit-episode.component';

const cmsRoutes: Routes = [
  { path: '', component: CmsComponent, children: [
    { path: 'shows', component: TvShowsComponent, children: [
      { path: '', component: ShowsListComponent, pathMatch: 'full' },
      { path: 'new', component: EditShowComponent },
      { path: ':id/edit', component: EditShowComponent },
      { path: ':id/season/new', component: EditSeasonComponent },
      { path: ':id/season/edit', component: EditSeasonComponent },
      { path: 'season/:id/episode/new', component: EditEpisodeComponent },
      { path: 'season/:id/episode/edit', component: EditEpisodeComponent }
    ]},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(cmsRoutes)
  ],
  exports: [RouterModule]
})
export class CmsRoutingModule {}
