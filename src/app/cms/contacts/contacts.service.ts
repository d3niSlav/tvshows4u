import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HelpersService } from '../../shared/services/helpers.service';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient, private helperService: HelpersService) {}

  getAllContactMessages(): Observable<any> {
    return this.http.get('/api/contactMessages', this.helperService.setHeaders());
  }

  getSingleContactMessages(messageId: number): Observable<any> {
    return this.http.get(`/api/contactMessage/${messageId}`, this.helperService.setHeaders());
  }

  getUnreadContactMessages(): Observable<any> {
    return this.http.get('/api/contactMessages', this.helperService.setHeaders());
  }

  getUnansweredContactMessages(): Observable<any> {
    return this.http.get('/api/contactMessages', this.helperService.setHeaders());
  }
}
