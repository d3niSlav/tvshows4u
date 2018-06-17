import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'featured-shows',
  templateUrl: './featured-shows.component.html',
  styleUrls: ['./featured-shows.component.scss']
})
export class FeaturedShowsComponent implements OnInit {
  @Input() sectionTitle: string = '';
  @Input() shows = [];

  constructor() {}

  ngOnInit() {}
}
