import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    return this.http.get('/api/comments');
  }
}
