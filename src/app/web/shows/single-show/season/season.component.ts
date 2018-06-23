import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SingleShowService } from '../single-show.service';

@Component({
  selector: 'tv-show-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  seasons = [];
  currentSeason: any;
  areEpisodesShown: boolean = false;

  constructor(private showService: SingleShowService, private route: ActivatedRoute) {}

  ngOnInit() {
    let tvShowId;

    this.route.parent.params.subscribe(
      (params: Params) => {
        tvShowId = +params['id'];
      }
    );

    this.showService.getTvShow(tvShowId).subscribe(res => {
      this.seasons = res.seasons;
      const currentSeasonId = res.seasons[res.seasons.length - 1].id;

      this.showService.getSingleSeason(currentSeasonId).subscribe((seasonData: any) => {
        this.currentSeason = seasonData;
      });
    });
  }

  changeSeason(seasonId: number) {
    this.showService.getSingleSeason(seasonId).subscribe((seasonData: any) => {
      this.currentSeason = seasonData;
    });
  }

  toggleEpisodes() {
    this.areEpisodesShown = !this.areEpisodesShown;
  }
}
