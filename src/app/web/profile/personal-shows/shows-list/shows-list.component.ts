import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'personal-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  @Input() shows: any;
  @Input() title: string;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
    console.log(this.shows);
  }

}
