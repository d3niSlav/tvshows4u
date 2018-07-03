import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { EditShowComponent } from './tv-shows/edit-show/edit-show.component';
import { CmsComponent } from './cms.component';
import { ShowsListComponent } from './tv-shows/shows-list/shows-list.component';
import { EditSeasonComponent } from './tv-shows/edit-season/edit-season.component';
import { EditEpisodeComponent } from './tv-shows/edit-episode/edit-episode.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { MessageDetailComponent } from './contacts/contact-messages-list/message-detail/message-detail.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { ActorsComponent } from './actors/actors.component';
import { CmsLoginComponent } from './auth/cms-login/cms-login.component';
import { CmsCommentsListComponent } from './comments/cms-comments-list/cms-comments-list.component';
import { ContactMessagesListComponent } from './contacts/contact-messages-list/contact-messages-list.component';

const cmsRoutes: Routes = [
  { path: '', component: CmsComponent, children: [
    { path: 'shows', component: TvShowsComponent, children: [
      { path: '', component: ShowsListComponent, pathMatch: 'full' },
      { path: 'new', component: EditShowComponent },
      { path: 'comments', component: CmsCommentsListComponent },
      { path: ':id/edit', component: EditShowComponent },
      { path: ':id/season/new', component: EditSeasonComponent },
      { path: ':id/season/:seasonId/edit', component: EditSeasonComponent },
      { path: ':id/season/:seasonId/episode/new', component: EditEpisodeComponent },
      { path: ':id/season/:seasonId/episode/:episodeId/edit', component: EditEpisodeComponent }
    ]},
    { path: 'users/:type', component: UsersListComponent },
    { path: 'login', component: CmsLoginComponent },
    { path: 'contact-messages', component: ContactMessagesListComponent },
    { path: 'contact-messages/:type', component: ContactMessagesListComponent },
    { path: 'contact-messages/read/:id', component: MessageDetailComponent },
    { path: 'actors', component: ActorsComponent, children: [
      { path: '', component: ActorsListComponent, pathMatch: 'full' },
      { path: 'new', component: EditActorComponent },
      { path: ':id/edit', component: EditActorComponent }
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
