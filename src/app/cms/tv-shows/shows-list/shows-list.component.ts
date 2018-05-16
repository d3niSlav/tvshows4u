import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  tvShows: any;

  constructor(private tvShowsService: TvShowsService) {
  }

  ngOnInit() {
    this.tvShowsService.getShows().subscribe(res => {
      this.tvShows = res;
    });
  }
}
