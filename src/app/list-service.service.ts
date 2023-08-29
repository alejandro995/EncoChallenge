import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from './models/list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  requestUrlAPI = 'https://jsonplaceholder.typicode.com/';

  constructor(public httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get(`${this.requestUrlAPI}posts]`)
  }


}
