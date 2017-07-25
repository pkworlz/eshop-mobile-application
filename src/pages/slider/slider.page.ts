import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { SliderService } from './slider.service';

@Component({
    selector: 'page-slider',
    templateUrl: 'slider.html',
    providers: [SliderService]
})
export class SliderPage {
    @ViewChild(Slides) slider: Slides;
    public slides: any;

    constructor(private sliderService: SliderService) {
    }

    ionViewWillEnter() {
        this.sliderService.getSlides()
            .subscribe(slides => {
                console.log(slides);
                this.slides = slides;
            });
        setTimeout(() => {
            this.slider.autoplay = 4000;
            this.slider.startAutoplay();
        },300);
    }
}