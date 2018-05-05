import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tv-show-card',
  templateUrl: './tv-show-card.component.html',
  host: {'class': 'col-6 col-sm-4 col-lg-3'},
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
