import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  setHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': sessionStorage.getItem('jwtToken') })
    };
  }

  getUserProfile(): Observable<any> {
    return this.http.get('/api/users', this.setHeaders());
  }

  getUserShowDataCheck(showId) {
    return this.http.get(`/api/profile/checkShow/${showId}`, this.setHeaders());
  }

  addShowToFavourites(showId) {
    return this.http.post('/api/profile/favourites/add', { showId: showId }, this.setHeaders());
  }

  removeShowFromFavourites(showId) {
    return this.http.post('/api/profile/favourites/remove', { showId: showId }, this.setHeaders());
  }

  addShowToWatchlist(showId) {
    return this.http.post('/api/profile/watchlist/add', { showId: showId }, this.setHeaders());
  }

  removeShowToWatchlist(showId) {
    return this.http.post('/api/profile/watchlist/remove', { showId: showId }, this.setHeaders());
  }
}
