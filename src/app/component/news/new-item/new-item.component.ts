import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../News.date.servise";
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-new-item',
    templateUrl: './new-item.component.html',
    styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit, OnDestroy {

    public items = [];
    id: number;

    private sub: Subscription;

    constructor(private activateRoute: ActivatedRoute, private dataService: DataService) {

        this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);

    }
pagePrev(num:number){
        if (num>0) {
            return num-1;
        } else {return this.items.length -1}
};
    pageNext(num:number){
        let ind: number = this.items.length;
        console.log(ind);
        if (num<=ind-2) {
            return num+1;
        } else {return 0}
    };
    ngOnInit() {
        this.items = this.dataService.getData();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
