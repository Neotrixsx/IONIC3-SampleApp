import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonProvider {
 
  constructor(public http: Http) {
    console.log('Hello JsonProvider Provider');
  }

  getJsonBlog() {
    return this.http.get('assets/json/blog').map(res => res.json());
  };
}
