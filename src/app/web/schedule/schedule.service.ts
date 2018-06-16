import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScheduleService {
  constructor(private http: HttpClient) { }

  getSchedule(periodData: any) {
    return this.http.post('/api/schedule', periodData);
  }
}
