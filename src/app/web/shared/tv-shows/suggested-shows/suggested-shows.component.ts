import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'suggested-shows',
  templateUrl: './suggested-shows.component.html',
  styleUrls: ['./suggested-shows.component.scss']
})
export class SuggestedShowsComponent implements OnInit {
  @Input() sectionTitle: string = '';
  @Input() shows = [];

  constructor() {}

  ngOnInit() {}
}
