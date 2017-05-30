import { Component, OnInit } from '@angular/core';
import {DataService} from "../News.date.servise";
import {News} from "../news.servise";

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  items: News[] = [];
  constructor (private dataService: DataService ) {}



  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
