import { Component, OnInit } from '@angular/core';
import {News} from "../../news/news.servise";
import {DataService} from "../../news/News.date.servise";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  items1: News[] = [];
  constructor (private dataNews: DataService ) {}

  addItem(title: string, category:string, text: string, autor:string){

    this.dataNews.addData(name, category, text, autor );
  }

  ngOnInit(){
    this.items1 = this.dataNews.getData();
  }

}


