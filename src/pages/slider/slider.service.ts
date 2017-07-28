import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConstants } from "../shared/appConstants";

@Injectable()
export class SliderService {
    constructor(private http: Http) {

    }

    getSlides() {
        return this.http.get(`${AppConstants.BASE_URL}getNivoSliderSlides`)
            .map((res: Response) => res.json());
    }
}