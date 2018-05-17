import {Component, OnInit} from '@angular/core';
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
  tvShowId: number;
  seasonId: number;
  episodeId: number;
  episodeNumber: number;
  editMode = false;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tvShowId = +params['id'];
        this.seasonId = +params['seasonId'];
        this.episodeId = +params['episodeId'];
      }
    );

    if (this.episodeId) {
      this.editMode = true;
    } else {
      this.route.queryParams.subscribe(
        (params: Params) => {
          this.episodeNumber = +params['number'];
        }
      );
    }

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
      this.tvShowsService.getSingleEpisode(this.episodeId).subscribe(res => {
          this.tvShowEpisodeForm = new FormGroup({
            'number': new FormControl(res.number),
            'title': new FormControl(res.title),
            'plot': new FormControl(res.plot),
            'screenshot': new FormControl(res.screenshot),
            'runtime': new FormControl(res.runtime),
            'releaseDate': new FormControl(new Date(res.releaseDate).toISOString().split('T')[0]),
            'imdbId': new FormControl(res.imdbId),
            'imdbRating': new FormControl(res.imdbRating)
          });
        }
      );
    }
  }
}
