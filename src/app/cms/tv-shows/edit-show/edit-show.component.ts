import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router'
import {TvShowsService} from '../../services/tv-shows.service';
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

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

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
    const year = (new Date()).getFullYear();
    const poster = '';
    const genre = '';
    const runtime = '';
    const logo = '';
    const status = 'unknown';
    const trailer = '';
    const plot = '';
    const languages = '';
    const country = '';
    const imdbID = '';
    const imdbRating = '';
    const awards = '';

    this.tvShowForm = new FormGroup({
      'title': new FormControl(title),
      'year': new FormControl(year),
      'poster': new FormControl(poster),
      'genre': new FormControl(genre),
      'runtime': new FormControl(runtime),
      'logo': new FormControl(logo),
      'status': new FormControl(status),
      'trailer': new FormControl(trailer),
      'plot': new FormControl(plot),
      'languages': new FormControl(languages),
      'country': new FormControl(country),
      'imdbID': new FormControl(imdbID),
      'imdbRating': new FormControl(imdbRating),
      'awards': new FormControl(awards)
    });

    if (this.editMode) {
      this.tvShowsService.getSingleShow(this.tvShowId).subscribe(res => {
        this.tvShowForm = new FormGroup({
            'title': new FormControl(res.title),
            'year': new FormControl(res.year),
            'poster': new FormControl(res.poster),
            'genre': new FormControl(res.genre),
            'runtime': new FormControl(res.runtime),
            'logo': new FormControl(res.logo),
            'status': new FormControl(res.status),
            'trailer': new FormControl(res.trailer),
            'plot': new FormControl(res.plot),
            'languages': new FormControl(res.languages),
            'country': new FormControl(res.country),
            'imdbID': new FormControl(res.imdbID),
            'imdbRating': new FormControl(res.imdbRating),
            'awards': new FormControl(res.awards)
          });

          this.seasons = res.seasons;
        }
      );
    }
  }
}
