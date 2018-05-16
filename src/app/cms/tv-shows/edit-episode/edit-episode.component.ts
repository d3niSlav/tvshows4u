import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {TvShowsService} from '../../services/tv-shows.service';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.scss']
})
export class EditEpisodeComponent implements OnInit {
  tvShowEpisodeForm: FormGroup;
  seasonId: string;
  episodeNumber: number;
  editMode = false;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.seasonId = params['id'];
      }
    );

    this.route.queryParams.subscribe(
      (params: Params) => {
        let episodeNumber = params['number'];
        if (!episodeNumber) {
          episodeNumber = params['id'];
          this.editMode = true;
        }

        this.episodeNumber = episodeNumber;
      }
    );

    console.log(this.episodeNumber);
    console.log(this.editMode);

    this.initForm();
  }

  private initForm() {
    const number = '';
    const title = '';
    const plot = '';
    const screenshot = '';
    const runtime = '';
    const releaseDate = '';
    const imdbId = '';
    const imdbRating = '';

    this.tvShowEpisodeForm = new FormGroup({
      'number': new FormControl(number),
      'title': new FormControl(title),
      'plot': new FormControl(plot),
      'screenshot': new FormControl(screenshot),
      'runtime': new FormControl(runtime),
      'releaseDate': new FormControl(releaseDate),
      'imdbId': new FormControl(imdbId),
      'imdbRating': new FormControl(imdbRating)
    });

    if (this.editMode) {
      this.tvShowsService.getSingleEpisode(this.seasonId, this.episodeNumber).subscribe(res => {
          console.log(res);

          this.tvShowEpisodeForm = new FormGroup({
            'number': new FormControl(res.number),
            'title': new FormControl(res.title),
            'plot': new FormControl(res.plot),
            'screenshot': new FormControl(res.screenshot),
            'runtime': new FormControl(res.runtime),
            'releaseDate': new FormControl(res.releaseDate),
            'imdbId': new FormControl(res.imdbId),
            'imdbRating': new FormControl(res.imdbRating)
          });
        }
      );
    }
  }
}
