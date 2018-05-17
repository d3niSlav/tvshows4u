import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router'
import {TvShowsService} from '../../services/tv-shows.service';

@Component({
  selector: 'app-edit-season',
  templateUrl: './edit-season.component.html',
  styleUrls: ['./edit-season.component.scss']
})
export class EditSeasonComponent implements OnInit {
  tvShowId: number;
  seasonId: number;
  seasonNumber: number;
  editMode = false;
  tvShowForm: FormGroup;
  episodes = [];

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tvShowId = +params['id'];
        this.seasonId = +params['seasonId'];
      }
    );

    if (this.seasonId) {
      this.editMode = true;
    } else {
      this.route.queryParams.subscribe(
        (params: Params) => {
          this.seasonNumber = +params['number'];
        }
      );
    }

    this.initForm();
  }

  private initForm() {
    const poster = '';
    const description = '';
    const number = '';
    const releaseYear = '';

    this.tvShowForm = new FormGroup({
      'poster': new FormControl(poster),
      'description': new FormControl(description),
      'number': new FormControl(number),
      'releaseYear': new FormControl(releaseYear)
    });

    if (this.editMode) {
      this.tvShowsService.getSingleSeason(this.seasonId).subscribe(res => {
          this.episodes = res.episodes.map(episode => {
            return {
              id: episode.id,
              number: episode.number
            };
          });

          this.tvShowForm = new FormGroup({
            'poster': new FormControl(res.poster),
            'description': new FormControl(res.description),
            'number': new FormControl(res.number),
            'releaseYear': new FormControl(res.releaseYear)
          });
        }
      );
    }
  }
}
