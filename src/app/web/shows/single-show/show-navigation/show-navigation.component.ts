import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../auth/auth.service';
import { ModalService } from '../../../../shared/services/modal.service';
import { ProfileService } from '../../../profile/profile.service';

@Component({
  selector: 'show-navigation',
  templateUrl: './show-navigation.component.html',
  styleUrls: ['./show-navigation.component.scss']
})
export class ShowNavigationComponent implements OnInit, OnDestroy {
  @Input() showId: number;
  @Input() isWatched: boolean = false;
  @Input() isFavourite: boolean = false;
  @Input() rating: string = 'N/A';
  isUserAuthenticated: boolean = false;
  subscription: Subscription;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private modalService: ModalService) {
  }

  ngOnInit() {
    this.isUserAuthenticated = this.authService.isUserLoggedIn();
    this.subscription = this.authService.userAuthenticationChanged
      .subscribe(
        (user: any) => {
          this.isUserAuthenticated = !!user;
        }
      );
  }

  toggleFavourite() {
    if (!this.isUserAuthenticated) {
      this.modalService.open('sign-in');
      return;
    }

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
    if (!this.isUserAuthenticated) {
      this.modalService.open('sign-in');
      return;
    }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
