import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';

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
  tvSeasonForm: FormGroup;
  episodes = [];

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService, private router: Router) {
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
    const number = this.seasonNumber || '';
    const releaseYear = '';

    this.tvSeasonForm = new FormGroup({
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

          this.fillForm(res);
        }
      );
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.tvShowsService.updateSeason(this.seasonId, this.tvSeasonForm.value).subscribe(res => {
        this.fillForm(res);
      });
    } else {
      const episodeData = {
        ...this.tvSeasonForm.value,
        number: this.seasonNumber
      };

      this.tvShowsService.addSeason(this.tvShowId, episodeData).subscribe(res => {
        this.router.navigate(['../', res.id, 'edit'], {relativeTo: this.route});
      });
    }
  }

  onDelete() {
    this.tvShowsService.deleteSeason(this.seasonId).subscribe(res => {
      if (res) {
        this.router.navigate(['../../../edit'], {relativeTo: this.route});
      }
    });
  }

  private fillForm(data) {
    this.tvSeasonForm = new FormGroup({
      'poster': new FormControl(data.poster),
      'description': new FormControl(data.description),
      'number': new FormControl(data.number),
      'releaseYear': new FormControl(data.releaseYear)
    });
  }
}
