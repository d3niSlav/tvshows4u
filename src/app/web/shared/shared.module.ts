import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedShowsComponent } from './tv-shows/featured-shows/featured-shows.component';
import { LinkButtonComponent } from './buttons/link-button/link-button.component';
import { PosterComponent } from './tv-shows/poster/poster.component';
import { ShowsWithRatingComponent } from './tv-shows/shows-with-rating/shows-with-rating.component';
import { StarsComponent } from './tv-shows/stars/stars.component';
import { SuggestedShowsComponent } from './tv-shows/suggested-shows/suggested-shows.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { TvShowCardComponent } from './tv-show-card/tv-show-card.component';
import { WebRoutingModule } from '../web-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  declarations: [
    FeaturedShowsComponent,
    LinkButtonComponent,
    PosterComponent,
    ShowsWithRatingComponent,
    StarsComponent,
    SuggestedShowsComponent,
    TruncatePipe,
    TvShowCardComponent
  ],
  exports: [
    FeaturedShowsComponent,
    ShowsWithRatingComponent,
    SuggestedShowsComponent,
    TvShowCardComponent
  ]
})
export class SharedModule { }
