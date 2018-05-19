import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService, private router: Router) {
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
          this.fillForm(res);
        }
      );
    }
  }

  private onSubmit() {
    if (this.editMode) {
      this.tvShowsService.updateEpisode(this.episodeId, this.tvShowEpisodeForm.value).subscribe(res => {
        this.fillForm(res);
      });
    } else {
      const episodeData = {
        ...this.tvShowEpisodeForm.value,
        number: this.episodeNumber
      };

      this.tvShowsService.addEpisode(this.seasonId, episodeData).subscribe(res => {
        this.router.navigate(['../', res.id, 'edit'], {relativeTo: this.route});
      });
    }
  }

  private onDelete() {
    this.tvShowsService.deleteEpisode(this.episodeId).subscribe(res => {
      if (res) {
        this.router.navigate(['../../../edit'], {relativeTo: this.route});
      }
    });
  }

  private fillForm(data) {
    this.tvShowEpisodeForm = new FormGroup({
      'number': new FormControl(data.number),
      'title': new FormControl(data.title),
      'plot': new FormControl(data.plot),
      'screenshot': new FormControl(data.screenshot),
      'runtime': new FormControl(data.runtime),
      'releaseDate': new FormControl(new Date(data.releaseDate).toISOString().split('T')[0]),
      'imdbId': new FormControl(data.imdbId),
      'imdbRating': new FormControl(data.imdbRating)
    });
  }
}
