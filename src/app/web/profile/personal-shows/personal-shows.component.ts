import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-personal-shows',
  templateUrl: './personal-shows.component.html',
  styleUrls: ['./personal-shows.component.scss']
})
export class PersonalShowsComponent implements OnInit, OnDestroy {
  shows: any;
  subscription: Subscription;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.shows = this.profileService.getPersonalShows();
    this.subscription = this.profileService.personalShowsChanged.subscribe((shows: any) => {
      this.shows = shows;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
