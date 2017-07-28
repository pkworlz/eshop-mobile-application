import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { SliderPage } from '../slider/slider.page';
import { CategoryService } from '../category/category.service';
import { CategoryPage } from '../category/category.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(SliderPage) sliderPage: SliderPage;
  @ViewChild(CategoryPage) categoryPage: CategoryPage;

  constructor(public navCtrl: NavController
    , private categoryService: CategoryService) {
  }

  ionViewWillEnter() {
    this.sliderPage.ionViewWillEnter();
    this.categoryPage.ionViewWillEnter();
  }
}
