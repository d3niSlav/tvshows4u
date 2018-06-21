import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActorComponent } from './actor/actor.component';
import { CommentsModule } from './comments-list/comments.module';
import { EpisodeComponent } from './season/episode/episode.component';
import { SeasonComponent } from './season/season.component';
import { ShowNavigationComponent } from './show-navigation/show-navigation.component';
import { SingleShowComponent } from './single-show.component';
import { SingleShowService } from './single-show.service';
import { TrailerComponent } from './trailer/trailer.component';
import { WebRoutingModule } from '../../web-routing.module';

@NgModule({
  declarations: [
    ActorComponent,
    EpisodeComponent,
    SeasonComponent,
    SingleShowComponent,
    ShowNavigationComponent,
    TrailerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule,
    CommentsModule
  ],
  providers: [
    SingleShowService
  ]
})
export class SingleShowModule { }
