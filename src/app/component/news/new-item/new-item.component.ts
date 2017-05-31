import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from "../News.date.servise";
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  public items  = [];
  id: number;
  constructor(private activateRoute: ActivatedRoute, private dataService: DataService){

    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
