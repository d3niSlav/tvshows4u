import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows/shows.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: any;
  searchOptions: any = [
    { criteria: 'title', name: 'Title' },
    { criteria: 'year', name: 'Year' },
    { criteria: 'genre', name: 'Genre' },
    { criteria: 'plot', name: 'Plot' },
    { criteria: '$', name: 'Filter all' }
  ];
  selectedCriteria: string = this.searchOptions[this.searchOptions.length - 1].criteria;
  searchTerm: string = '';
  resultList: any;

  constructor(private showsService: ShowsService) {
  }

  ngOnInit() {
    this.showsService.getShows().subscribe((res: any) => {
      this.shows = res;
      this.resultList = res;
    });
  }

  onCriteriaChange(selectedValue: string) {
    this.selectedCriteria = selectedValue;
    this.filterResults();
  }

  onTermChange(searchedTerm: string) {
    this.searchTerm = searchedTerm;
    this.filterResults();
  }

  filterResults() {
    const searchedTerm = this.searchTerm.toLowerCase();
    this.resultList = this.shows.filter((show: any) => {
      switch (this.selectedCriteria) {
        case '$':
          return JSON.stringify(show).toLowerCase().indexOf(searchedTerm) >= 0;
        case 'title':
          return JSON.stringify(show.title).toLowerCase().indexOf(searchedTerm) >= 0;
        case 'year':
          return JSON.stringify(show.year).toLowerCase().indexOf(searchedTerm) >= 0;
        case 'genre':
          return JSON.stringify(show.genre).toLowerCase().indexOf(searchedTerm) >= 0;
        case 'plot':
          return JSON.stringify(show.plot).toLowerCase().indexOf(searchedTerm) >= 0;
        default:
          return true;
      }
    });
  }
}
