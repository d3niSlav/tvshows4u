import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: any;

  constructor() {
  }

  ngOnInit() {
  }

}
