import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ShowsService {
  constructor(private http: HttpClient) {
  }

  getShows(criteria: string = 'title'): Observable<any> {
    return this.http.get(`/api/shows?criteria=${criteria}`);
  }

  getTvShow(showId: number): Observable<any> {
    return this.http.get(`/api/shows/${showId}`);
  }

  getSingleSeason(seasonId: number): Observable<any> {
    return this.http.get(`/api/shows/seasons/${seasonId}`);
  }

  getSingleEpisode(episodeId: number): Observable<any> {
    return this.http.get(`/api/shows/episodes/${episodeId}`);
  }
}