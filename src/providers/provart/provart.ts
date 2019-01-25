import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';

/*
  Generated class for the ProvartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvartProvider {

  apiUrl = 'http://localhost:8001/api/articles.json'

  constructor(public http: HttpClient) {
    console.log('Hello ProvartProvider Provider');
  }
  getarticles() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
