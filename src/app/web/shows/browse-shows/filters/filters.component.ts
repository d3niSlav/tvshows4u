import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shows-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() categories;
  @Output() sortingFilterChanged = new EventEmitter<any>();
  sortingFiltersMap = [
    {
      icon: 'sort-alpha-asc',
      criteria: 'title',
      isDescending: false,
      title: 'Sort by title A-Z'
    },
    {
      icon: 'sort-alpha-desc',
      criteria: 'title',
      isDescending: true,
      title: 'Sort by title Z-A'
    },
    {
      icon: 'line-chart',
      criteria: 'imdbRating',
      isDescending: true,
      title: 'Sort by rating'
    },
    {
      icon: 'calendar-o',
      criteria: 'releaseDate',
      isDescending: true,
      title: 'Sort by newest first'
    }
  ];
  currentSortingFilter = this.sortingFiltersMap[0];
  currentCategories = [];

  constructor() {}

  ngOnInit() {}

  switchSortingFilter(criteria) {
    this.currentSortingFilter = criteria;
    this.sortingFilterChanged.emit(criteria);
  }

  handleCategoryChanged(categoryData: any) {
    if (!this.currentCategories.find(category => category === categoryData.category)) {
      this.currentCategories.push(categoryData.category);
    } else {
      this.currentCategories = this.currentCategories.filter(category => category !== categoryData.category);
    }
  };
}
