import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows.service';

@Component({
  selector: 'app-newest-shows',
  templateUrl: './newest-shows.component.html',
  styleUrls: ['./newest-shows.component.scss']
})
export class NewestShowsComponent implements OnInit {
  showsOnFocus = [];
  suggestedShows = [];
  rankedShows = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.showsService.getNewestShows(11).subscribe(res => {
      this.showsOnFocus = res.slice(0, 4);
      this.suggestedShows = res.slice(4, 7);
      this.rankedShows = res.slice(7, 11);
    });
  }

}
