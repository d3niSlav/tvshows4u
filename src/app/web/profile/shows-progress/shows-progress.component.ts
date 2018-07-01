import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-shows-progress',
  templateUrl: './shows-progress.component.html',
  styleUrls: ['./shows-progress.component.scss']
})
export class ShowsProgressComponent implements OnInit, OnDestroy {
  shows: any;
  subscription: Subscription;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    const shows = this.profileService.getPersonalShows()
    this.shows = shows.watchedShows || [];
    this.subscription = this.profileService.personalShowsChanged.subscribe((shows: any) => {
      this.shows = shows.watchedShows;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
