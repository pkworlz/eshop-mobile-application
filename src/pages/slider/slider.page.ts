import { Component, ViewChild, OnInit } from '@angular/core';
import { Slides } from 'ionic-angular';

import { SliderService } from './slider.service';

@Component({
    selector: 'page-slider',
    templateUrl: 'slider.html',
    providers: [SliderService]
})
export class SliderPage implements OnInit{
    @ViewChild(Slides) slider: Slides;
    public slides: any;

    constructor(private sliderService: SliderService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.slider.autoplay = 4000;
            this.slider.startAutoplay();
        },1000);
    }

    ionViewWillEnter() {
        this.sliderService.getSlides()
            .subscribe(slides => {
                console.log(slides);
                this.slides = slides;
            });
    }
}