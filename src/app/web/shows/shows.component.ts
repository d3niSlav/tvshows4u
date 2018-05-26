import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows = [];
  sortingCriteria = '';
  isDescending = '';

  constructor(private showsService: ShowsService) {
  }

  ngOnInit() {
    this.showsService.getShows().subscribe(res => {
      this.shows = res;
    });
  }

  handleSortingCriteriaChange(criteriaData) {
    this.sortingCriteria = criteriaData.criteria;
    this.isDescending = criteriaData.isDescending;
  }
}
