import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows.service';

@Component({
  selector: 'app-rated-shows',
  templateUrl: './rated-shows.component.html',
  styleUrls: ['./rated-shows.component.scss']
})
export class RatedShowsComponent implements OnInit {
  showsOnFocus = [];
  suggestedShows = [];
  rankedShows = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.showsService.getRatedShows(10).subscribe(res => {
      this.showsOnFocus = res.slice(0, 3);
      this.suggestedShows = res.slice(3, 6);
      this.rankedShows = res.slice(6, 10);
    });
  }

}
