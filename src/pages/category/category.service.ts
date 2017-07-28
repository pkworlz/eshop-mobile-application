import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConstants } from "../shared/appConstants";

@Injectable()
export class CategoryService {
    constructor(private http:Http) {

    }

    getHomepageCategories() {
        return this.http.get(`${AppConstants.BASE_URL}getHomepageCategories`)
            .map((response: Response) => response.json());
    }
}