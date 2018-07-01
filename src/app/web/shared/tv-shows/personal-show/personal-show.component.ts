import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'personal-show',
  templateUrl: './personal-show.component.html',
  styleUrls: ['./personal-show.component.scss']
})
export class PersonalShowComponent implements OnInit {
  @Input() show: any;

  constructor() {}

  ngOnInit() {}
}
