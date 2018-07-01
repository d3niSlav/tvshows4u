import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows/shows.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: any;

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.showsService.getCatalogue().subscribe((res: any) => {
      this.shows = res;
    });
  }
}
