import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule:any = [];
  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.scheduleService.getSchedule(this.getDatePeriod()).subscribe((res) => {
      this.schedule = res;
    });
  }

  getDatePeriod(): { startDate: string, endDate: string } {
    const currentDate = new Date('2016-11-14');
    let firstDay = currentDate.getDate() - currentDate.getDay();
    firstDay = firstDay + 1;
    const lastDay = firstDay + 6;

    return {
      startDate: this.formatDate(new Date(currentDate.setDate(firstDay))),
      endDate: this.formatDate(new Date(currentDate.setDate(lastDay)))
    };
  }

  formatDate(date: Date): string {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
      month = `0${month}`;
    }

    if (day.length < 2) {
      day = `0${day}`
    }

    return [year, month, day].join('-');
  }
}
