import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-navigation',
  templateUrl: './show-navigation.component.html',
  styleUrls: ['./show-navigation.component.scss']
})
export class ShowNavigationComponent implements OnInit {
  @Input() showId: number;
  @Input() isWatched: boolean = false;
  @Input() isFavourite: boolean = false;
  @Input() rating: string = 'N/A';

  constructor() {
  }

  ngOnInit() {
  }

}
