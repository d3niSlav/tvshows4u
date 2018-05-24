import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  getUserProfile(token): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': token})
    };
    return this.http.get('/api/users', httpOptions);
  }
}
