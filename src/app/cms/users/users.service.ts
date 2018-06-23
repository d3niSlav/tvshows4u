import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HelpersService } from '../../shared/services/helpers.service';


@Injectable()
export class UsersService {

  constructor(private http: HttpClient, private helpers: HelpersService) { }

  getUsers(usersType: string): Observable<any> {
    return this.http.get(`/api/users/${usersType}`, this.helpers.setHeaders());
  }
}
