import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class TvShowsService {
  constructor(private http: HttpClient) {
  }

  getShows(): Observable<any> {
    return this.http.get('/api/shows');
  }

  getSingleShow(showId: number): Observable<any> {
    return this.http.get(`/api/shows/${showId}`);
  }

  getSingleSeason(seasonId: number): Observable<any> {
    return this.http.get(`/api/shows/seasons/${seasonId}`);
  }

  getSingleEpisode(episodeId: number): Observable<any> {
    return this.http.get(`/api/shows/episodes/${episodeId}`);
  }
}
