import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Actor } from '../../shared/models/actor.model';

@Injectable()
export class ActorsService {
  constructor(private http: HttpClient) {}

  getAllActors(): Observable<any> {
    return this.http.get('/api/actors');
  }

  getSingleActor(id: number): Observable<any> {
    return this.http.get(`/api/actor/${id}`);
  }

  createActor(actorData: Actor): Observable<any> {
    return this.http.post('/api/actors', actorData);
  }

  updateSingleActor(id: number, actorData: Actor): Observable<any> {
    return this.http.put(`/api/actor/${id}`, actorData);
  }

  deleteSingleActor(id: number): Observable<any> {
    return this.http.delete(`/api/actor/${id}`);
  }
}
