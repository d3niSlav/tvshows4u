import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log(this.getDatePeriod());
  }

  getDatePeriod(): { startDate: string, endDate: string } {
    const currentDate = new Date();
    let first = currentDate.getDate() - currentDate.getDay();
    first = first + 1;
    const last = first + 6;

    return {
      startDate: this.formatDate(new Date(currentDate.setDate(first))),
      endDate: this.formatDate(new Date(currentDate.setDate(last)))
    };
  }

  formatDate(date: Date): string {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
