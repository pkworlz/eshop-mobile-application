import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SliderService {
    private baseUrl = 'http://localhost:10001/api/eshop/';

    constructor(private http: Http) {

    }

    getSlides() {
        return this.http.get(`${this.baseUrl}getNivoSliderSlides`)
            .map((res: Response) => res.json());
    }
}