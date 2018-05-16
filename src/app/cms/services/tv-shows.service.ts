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

  getSingleShow(showId: string): Observable<any> {
    return this.http.get(`/api/shows/${showId}`);
  }

  getSingleSeason(showId: string, seasonNumber): Observable<any> {
    return this.http.get(`/api/shows/${showId}/season/${seasonNumber}`);
  }

  getSingleEpisode(seasonId: string, episodeNumber): Observable<any> {
    return this.http.get(`/api/shows/seasonId/${seasonId}/episode/${episodeNumber}`);
  }
}
