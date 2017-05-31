import { Component, OnInit } from '@angular/core';
import {News} from "../../news/news.servise";
import {DataService} from "../../news/News.date.servise";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css'],
  providers: [DataService]
})
export class NewsAddComponent implements OnInit {


  constructor (private dataNews: DataService ) {}

  addItem( title : string, category : string, text: string, autor: string){

    this.dataNews.addData(title, category, text, autor );
  }

  ngOnInit(){
    this.items = this.dataNews.getData();
  }

}


