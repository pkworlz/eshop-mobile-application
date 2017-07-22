import { Component } from '@angular/core';

import { SliderService } from './slider.service';

@Component({
    selector: 'page-slider',
    templateUrl: 'slider.html',
    providers: [SliderService]
})
export class SliderPage {

    constructor(private sliderService: SliderService) {
        this.sliderService.getSlides()
            .subscribe(slides => {
                console.log(slides);
            })
    }
}