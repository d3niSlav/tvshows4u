import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../../profile/profile.service';
import { SingleShowService } from './single-show.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  show: any;

  constructor(private authService: AuthService,
              private profileService: ProfileService,
              private showService: SingleShowService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let tvShowId;

    this.route.params.subscribe(
      (params: Params) => {
        tvShowId = +params['id'];
      }
    );

    if (tvShowId) {
      this.showService.getTvShow(tvShowId).subscribe(res => {
        const user = this.authService.getCurrentUser();
        if (user) {
          this.profileService.getUserShowDataCheck(tvShowId).subscribe(
            (show: any) => {
              this.show = {
                ...res,
                isFavourite: show.isFavourite,
                isWatched: show.isWatched
              };

              this.showService.setCurrentShow(this.show);
            },
            (error: any) => {
              this.show = res;
              this.showService.setCurrentShow(res);
            }
          );
        } else {
          this.show = res;
        }
      });
    }
  }
}
