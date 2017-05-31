import { Component, OnInit } from '@angular/core';
import {DataService} from "../News.date.servise";


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
  providers: [DataService]
})
export class NewListComponent implements OnInit {

 public items = [];
  constructor (private dataService: DataService ) {}



  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
