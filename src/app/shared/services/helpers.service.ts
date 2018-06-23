import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HelpersService {

  constructor() { }

  setHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': sessionStorage.getItem('jwtToken') })
    };
  }
}
