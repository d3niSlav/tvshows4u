import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleShowService {
  currentShow = null;
  constructor(private http: HttpClient) {
  }

  getShowId() {
    if (this.currentShow){
      return this.currentShow.id;
    }
  }

  setCurrentShow(show: any) {
    this.currentShow = show;
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

  getComments(showId: number): Observable<any> {
    return this.http.get(`/api/comments/${showId}`);
  }

  addComment(commentData: any): Observable<any> {
    if (this.currentShow) {
      const formData = {
        ...commentData,
        showId: this.currentShow.id
      };

      return this.http.post(`/api/comment`, formData);
    }
  }

  removeComment(commentId): Observable<any> {
    return this.http.delete(`/api/comment/${commentId}`);
  }
}
