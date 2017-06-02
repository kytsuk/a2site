import { Component, OnInit } from '@angular/core';
import { News } from "../../news/news.servise";
import { Response } from '@angular/http';
import { HttpService } from '../../news/http.servise';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HttpService]
})
export class HomeComponent implements OnInit {
    post = [];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {


        this.httpService.getConsol()
            .subscribe(data => {

                this.post = data.news;

            });

    }


}
