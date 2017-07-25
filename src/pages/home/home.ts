import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SliderPage } from '../slider/slider.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(SliderPage) sliderPage: SliderPage;

  constructor(public navCtrl: NavController) {
    console.log('first time fires');
  }

  ionViewWillEnter() {
    console.log('call me everytime');
    this.sliderPage.ionViewWillEnter()
  }
}
