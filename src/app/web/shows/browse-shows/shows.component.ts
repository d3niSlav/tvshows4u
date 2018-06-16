import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows = [];
  categories;
  sortingCriteria = '';
  isDescending = '';

  constructor(private showsService: ShowsService) {
  }

  ngOnInit() {
    this.showsService.getShows().subscribe(res => {
      this.shows = res;
      this.categories = this.getCategories(this.shows);
    });
  }

  handleSortingCriteriaChange(criteriaData) {
    this.sortingCriteria = criteriaData.criteria;
    this.isDescending = criteriaData.isDescending;
  }

  getCategories(shows) {
    const categories = new Set();
    shows.forEach((show: any) => {
      const currentShowCategories = show.genre.split(',');
      currentShowCategories.forEach((category: any) => {
        categories.add(category.trim());
      });
    });

    return categories;
  }
}
