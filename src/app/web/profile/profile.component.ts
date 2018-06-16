import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData = {};
  favouriteShows: any[] = [];
  watchedShows: any[] = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getUserProfile().subscribe((response: Response) => {
      this.profileData = response;
    });

    this.profileService.getUserShows().subscribe((response: any) => {
      this.favouriteShows = response.filter((show) => {
        return show.isFavourite;
      });
      this.watchedShows = response.filter((show) => {
        return show.isWatched;
      });

      this.profileService.setUserShows({
        favourites: this.favouriteShows,
        watchedShows: this.watchedShows
      });
    });
  }

}
