import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  requestUrlAPI = 'https://jsonplaceholder.typicode.com/';
  logged = false;
  userId = 0;

  constructor(public httpClient: HttpClient, public router: Router) { }

  getList():Observable<any> {
    return this.httpClient.get(`${this.requestUrlAPI}posts`)
  }

  getListByUserId(idNumber : number):Observable<any> {
    this.userId = idNumber;
    return this.httpClient.get(`${this.requestUrlAPI}posts`).pipe(
      filter((valueList:any) => valueList.userId === idNumber)
    )
  }

  login(id: number, password: string): boolean{
    if(password === 'password' && this.getListByUserId(id)) {
      this.logged = true;
      this.router.navigate(['']);
    } else {
      this.logged = false;
    }

    return this.logged;
  }
}
