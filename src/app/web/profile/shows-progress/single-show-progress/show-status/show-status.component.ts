import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.scss']
})
export class ShowStatusComponent implements OnInit {
  @Input() status: string = 'unknown';
  currentStatus: any;
  statuses = {
    'unknown': {
      title: 'Unknown',
      type: 'unknown',
      icon: 'fa-question-circle-o'
    },
    'on-air': {
      title: 'On air',
      type: 'on-air',
      icon: 'fa-play-circle-o'
    },
    'canceled': {
      title: 'Canceled',
      type: 'canceled',
      icon: 'fa-window-close-o'
    },
    'renewed': {
      title: 'Renewed',
      type: 'renewed',
      icon: 'fa-check-square-o'
    },
    'finished': {
      title: 'Finished',
      type: 'finished',
      icon: 'fa-flag-checkered'
    }
  };

  constructor() {}

  ngOnInit() {
    this.currentStatus = this.statuses[this.status || 'unknown'];
  }
}
