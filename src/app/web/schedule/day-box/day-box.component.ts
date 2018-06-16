import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-day-box',
  templateUrl: './day-box.component.html',
  styleUrls: ['./day-box.component.scss']
})
export class DayBoxComponent implements OnInit {
  @Input() day: any;

  constructor() { }

  ngOnInit() {
  }

}
