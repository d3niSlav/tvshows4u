import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  sendMessage(messageData: any): Observable<any> {
    console.log(messageData);
    return this.http.get(`/api/shows`);
  }
}
