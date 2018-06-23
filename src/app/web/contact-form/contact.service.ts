import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  sendMessage(messageData: any): Observable<any> {
    return this.http.post('/api/contactMessages', messageData);
  }
}
