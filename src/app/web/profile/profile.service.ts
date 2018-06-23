import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HelpersService } from '../../shared/services/helpers.service';

@Injectable()
export class ProfileService {
  personalShows = {
    favourites: [],
    watchedShows: []
  };
  personalShowsChanged = new Subject<any>();

  constructor(private http: HttpClient, private helpersService: HelpersService) {}

  getUserProfile(): Observable<any> {
    return this.http.get('/api/users', this.helpersService.setHeaders());
  }

  getUserShowDataCheck(showId) {
    return this.http.get(`/api/profile/checkShow/${showId}`, this.helpersService.setHeaders());
  }

  addShowToFavourites(showId) {
    return this.http.post('/api/profile/favourites/add', { showId: showId }, this.helpersService.setHeaders());
  }

  removeShowFromFavourites(showId) {
    return this.http.post('/api/profile/favourites/remove', { showId: showId }, this.helpersService.setHeaders());
  }

  addShowToWatchlist(showId) {
    return this.http.post('/api/profile/watchlist/add', { showId: showId }, this.helpersService.setHeaders());
  }

  removeShowToWatchlist(showId) {
    return this.http.post('/api/profile/watchlist/remove', { showId: showId }, this.helpersService.setHeaders());
  }

  getUserShows() {
    return this.http.get('/api/profile/shows', this.helpersService.setHeaders());
  }

  setUserShows(shows: any) {
    this.personalShows = shows;
    this.personalShowsChanged.next(this.personalShows);
  }

  getPersonalShows() {
    return this.personalShows;
  }

  updateData(url: string, data: any) {
    return this.http.put(url, data, this.helpersService.setHeaders());
  }

  getUserEmail() {
    return this.http.get('/api/profile/email', this.helpersService.setHeaders());
  }
}
