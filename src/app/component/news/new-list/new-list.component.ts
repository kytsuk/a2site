import { Component, OnInit } from '@angular/core';
import {DataService} from "../News.date.servise";



@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  visibility: boolean=false;

  chgclas(){
   this.visibility = !this.visibility;
  }
 public items = [];
  constructor (private dataService: DataService ) {}



  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
