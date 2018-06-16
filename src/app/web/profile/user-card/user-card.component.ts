import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() profile: any;
  @Input() favouritesCount: number = 0;
  @Input() watchedShowsCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
