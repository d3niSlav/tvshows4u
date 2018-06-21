import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../../profile/profile.service';

@Component({
  selector: 'show-navigation',
  templateUrl: './show-navigation.component.html',
  styleUrls: ['./show-navigation.component.scss']
})
export class ShowNavigationComponent implements OnInit {
  @Input() showId: number;
  @Input() isWatched: boolean = false;
  @Input() isFavourite: boolean = false;
  @Input() rating: string = 'N/A';

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
  }

  toggleFavourite() {
    if (this.isFavourite) {
      this.profileService.removeShowFromFavourites(this.showId).subscribe((res: any) => {
        this.isFavourite = res.result;
      });
    } else {
      this.profileService.addShowToFavourites(this.showId).subscribe((res: any) => {
        this.isFavourite = res.result;
      });
    }
  }

  toggleWatched() {
    if (this.isWatched) {
      this.profileService.removeShowToWatchlist(this.showId).subscribe((res: any) => {
        this.isWatched = res.result;
      });
    } else {
      this.profileService.addShowToWatchlist(this.showId).subscribe((res: any) => {
        this.isWatched = res.result;
      });
    }
  }
}
