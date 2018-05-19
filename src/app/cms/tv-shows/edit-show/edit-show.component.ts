import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.scss']
})
export class EditShowComponent implements OnInit {
  tvShowId: number;
  editMode = false;
  tvShowForm: FormGroup;
  seasons = [];

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService, private router: Router) {
  }

    ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.tvShowId = id;
        this.editMode = !!id;
        this.initForm();
      }
    );
  }

  private initForm() {
    const title = '';
    const year = '';
    const releaseDate = '';
    const poster = '';
    const genre = '';
    const runtime = '';
    const logo = '';
    const status = 'unknown';
    const trailer = '';
    const plot = '';
    const language = '';
    const country = '';
    const imdbId = '';
    const imdbRating = '';
    const awards = '';

    this.tvShowForm = new FormGroup({
      'title': new FormControl(title),
      'year': new FormControl(year),
      'releaseDate': new FormControl(releaseDate),
      'poster': new FormControl(poster),
      'genre': new FormControl(genre),
      'runtime': new FormControl(runtime),
      'logo': new FormControl(logo),
      'status': new FormControl(status),
      'trailer': new FormControl(trailer),
      'plot': new FormControl(plot),
      'language': new FormControl(language),
      'country': new FormControl(country),
      'imdbId': new FormControl(imdbId),
      'imdbRating': new FormControl(imdbRating),
      'awards': new FormControl(awards)
    });

    if (this.editMode) {
      this.tvShowsService.getTvShow(this.tvShowId).subscribe(res => {
          this.fillForm(res);
          this.seasons = res.seasons;
        }
      );
    }
  }

  private onSubmit() {
    if (this.editMode) {
      this.tvShowsService.updateTvShow(this.tvShowId, this.tvShowForm.value).subscribe(res => {
        this.fillForm(res);
      });
    } else {
        this.tvShowsService.addTvShow(this.tvShowForm.value).subscribe(res => {
        this.router.navigate(['../', res.id, 'edit'], {relativeTo: this.route});
      });
    }
  }

  private onDelete() {
    this.tvShowsService.deleteTvShow(this.tvShowId).subscribe(res => {
      if (res) {
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    });
  }

  private fillForm(data) {
    this.tvShowForm = new FormGroup({
      'title': new FormControl(data.title),
      'year': new FormControl(data.year),
      'releaseDate': new FormControl(new Date(data.releaseDate).toISOString().split('T')[0]),
      'poster': new FormControl(data.poster),
      'genre': new FormControl(data.genre),
      'runtime': new FormControl(data.runtime),
      'logo': new FormControl(data.logo),
      'status': new FormControl(data.status),
      'trailer': new FormControl(data.trailer),
      'plot': new FormControl(data.plot),
      'language': new FormControl(data.language),
      'country': new FormControl(data.country),
      'imdbId': new FormControl(data.imdbId),
      'imdbRating': new FormControl(data.imdbRating),
      'awards': new FormControl(data.awards)
    });
  }
}
