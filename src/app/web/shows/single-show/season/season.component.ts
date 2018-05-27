import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShowsService } from '../../shows.service';
import { SingleShowComponent } from '../single-show.component';

@Component({
  selector: 'season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  seasons = [];
  currentSeason: any;
  areEpisodesShown: boolean = false;

  constructor(private showsService: ShowsService, private route: ActivatedRoute, private parent: SingleShowComponent) {
  }

  ngOnInit() {
    let tvShowId;

    this.route.parent.params.subscribe(
      (params: Params) => {
        tvShowId = +params['id'];
      }
    );

    this.showsService.getTvShow(tvShowId).subscribe(res => {
      this.seasons = res.seasons;
      const currentSeasonId = res.seasons[res.seasons.length - 1].id;

      this.showsService.getSingleSeason(currentSeasonId).subscribe(res => {
        this.currentSeason = res;
      });
    });
  }

  toggleEpisodes() {
    this.areEpisodesShown = !this.areEpisodesShown;
  }
}
