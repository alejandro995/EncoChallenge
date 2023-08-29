import { Component } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable, of } from 'rxjs';
import { List } from '../models/list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private listService: ListServiceService){

    this.getUsers();
  }

  getUsers() {
    return this.listService.getList().subscribe((value)=> {
      console.log(value)
    });
  }


}
