import { List } from './../models/list.model';
import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable, map, of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   listArray: List[] = [];

  constructor(private listService: ListServiceService){
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.listService.getListByUserId(this.listService.userId).subscribe((value) => this.listArray = value);
  }
}
