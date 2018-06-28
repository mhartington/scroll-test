import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
@Injectable()
export class UserProvider {
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUser() {
    return this.http
      .get('https://randomuser.me/api/?results=200')
      .pipe(map((res: any) => res.results));
  }
}
