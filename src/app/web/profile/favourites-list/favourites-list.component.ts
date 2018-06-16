import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {
  private shows: any[];
  pager: any = {};
  pagedItems: any[];

  constructor() { }

  ngOnInit() {
  //   // get dummy data
  //   this.http.get('./dummy-data.json')
  //     .map((response: Response) => response.json())
  //     .subscribe(data => {
  //       // set items to json response
  //       this.allItems = data;
  //
  //       // initialize to page 1
  //       this.setPage(1);
  //     });
  // }
  //
  // setPage(page: number) {
  //   // get pager object from service
  //   this.pager = this.pagerService.getPager(this.allItems.length, page);
  //
  //   // get current page of items
  //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}