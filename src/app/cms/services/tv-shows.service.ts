import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class TvShowsService {
  constructor(private http: HttpClient) {
  }

  getShows(): Observable<any> {
    return this.http.get('/api/shows?criteria=title');
  }

  /** TV Shows **/
  addTvShow(tvShowData: any): Observable<any> {
    return this.http.post(`/api/shows`, tvShowData);
  }

  getTvShow(showId: number): Observable<any> {
    return this.http.get(`/api/shows/${showId}`);
  }

  updateTvShow(tvShowId: number, tvShowData: any): Observable<any> {
    return this.http.put(`/api/shows/${tvShowId}`, tvShowData);
  }

  deleteTvShow(tvShowId: number): Observable<any> {
    return this.http.delete(`/api/shows/${tvShowId}`);
  }

  /** Seasons **/

  addSeason(showId: number, seasonData: any): Observable<any> {
    return this.http.post(`/api/shows/${showId}/seasons`, seasonData);
  }

  getSingleSeason(seasonId: number): Observable<any> {
    return this.http.get(`/api/shows/seasons/${seasonId}`);
  }

  updateSeason(seasonId: number, seasonData: any): Observable<any> {
    return this.http.put(`/api/shows/seasons/${seasonId}`, seasonData);
  }

  deleteSeason(seasonId: number): Observable<any> {
    return this.http.delete(`/api/shows/seasons/${seasonId}`);
  }

  /** Episodes **/

  addEpisode(seasonId: number, episodeData: any): Observable<any> {
    return this.http.post(`/api/shows/seasons/${seasonId}/episodes`, episodeData);
  }

  getSingleEpisode(episodeId: number): Observable<any> {
    return this.http.get(`/api/shows/episodes/${episodeId}`);
  }

  updateEpisode(episodeId: number, episodeData: any): Observable<any> {
    return this.http.put(`/api/shows/episodes/${episodeId}`, episodeData);
  }

  deleteEpisode(episodeId: number): Observable<any> {
    return this.http.delete(`/api/shows/episodes/${episodeId}`);
  }
}
