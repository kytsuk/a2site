import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getData() {
        return this.http.get('http://api.test.dev/news');
    }

    getConsol(): any {
        return this.http.get('http://api.test.dev/news').map(res => res.json());
    }
}