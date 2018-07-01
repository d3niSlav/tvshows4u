import { Component, Input, OnInit } from '@angular/core';

import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-single-show-progress',
  templateUrl: './single-show-progress.component.html',
  styleUrls: ['./single-show-progress.component.scss']
})
export class SingleShowProgressComponent implements OnInit {
  @Input() show: any;
  isEditActive: boolean = false;
  seasons: any = [];
  episodes: any = [];
  selectedSeason: number;
  selectedEpisode: number;
  isLatestReached: boolean = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.setShowData();
    this.initSelectedData();
  }

  moveCurrentProgressToNextEpisode() {
    const maxEpisodesPerSeason = this.show.seasons[this.selectedSeason - 1].episodes;
    const maxSeasonNumber = this.show.seasons.length;
    if (this.selectedEpisode === maxEpisodesPerSeason) {
      if (this.selectedSeason < maxSeasonNumber) {
        this.selectedEpisode = 1;
        this.selectedSeason++;
      } else {
        this.isLatestReached = true;
      }
    } else {
      this.selectedEpisode++;
    }

    const requestData = {
      showId: this.show.id,
      seasonNumber: this.selectedSeason,
      episodeNumber: this.selectedEpisode
    };

    this.profileService.updateData('/api/profile/watchlist/progress', requestData).subscribe((res: any) => {
      this.show.seasonNumber = this.selectedSeason;
      this.show.episodeNumber = this.selectedEpisode;
      this.checkIfLatestEpisodeIsReached();
    });
  }

  onSeasonChange(seasonNumber: number) {
    this.selectedSeason = +seasonNumber;
    this.selectedEpisode = 1;
    this.episodes = this.generateArrayFromNumber(this.show.seasons[seasonNumber - 1].episodes);
  }

  onEpisodeChange(episodeNumber: number) {
    this.selectedEpisode = +episodeNumber;
  }

  saveSelectedData() {
    const requestData = {
      showId: this.show.id,
      seasonNumber: +this.selectedSeason,
      episodeNumber: +this.selectedEpisode
    };

    this.profileService.updateData('/api/profile/watchlist/progress', requestData).subscribe((res: any) => {
      this.show.seasonNumber = this.selectedSeason;
      this.show.episodeNumber = this.selectedEpisode;
      this.closeEditProgress();
      this.checkIfLatestEpisodeIsReached();
    });
  }

  openEditProgress() {
    this.isEditActive = true;
  }

  closeEditProgress() {
    this.isEditActive = false;
  }

  initSelectedData() {
    this.selectedSeason = this.show.seasonNumber;
    this.selectedEpisode = this.show.episodeNumber;
  }

  setShowData() {
    this.seasons = this.generateArrayFromNumber(this.show.seasons.length);
    this.episodes = this.generateArrayFromNumber(this.show.seasons[this.show.seasonNumber - 1].episodes);
    this.checkIfLatestEpisodeIsReached();
  }

  checkIfLatestEpisodeIsReached() {
    if (this.show) {
      const totalSeason = this.show.seasons.length;
      this.isLatestReached = this.show.seasonNumber === totalSeason
        && this.show.seasons[totalSeason - 1].episodes === this.show.episodeNumber;
    }
  }

  generateArrayFromNumber(number: number){
    return new Array(number).fill(number).map((number, index) => ++index);
  }
}
