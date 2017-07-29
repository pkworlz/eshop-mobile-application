import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Slides } from 'ionic-angular';

import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
    selector: 'category-page',
    template: `
    <div class="category-listing homepage-categories">
        <div class="swiper-container">
            <ion-slides #categorySlider>
                <ion-slide class="category-box" *ngFor="let category of categories">
                    <div class="category-box-image">
                        <img [src]="category.imageUrl" [alt]="category.name"  />
                    </div>
                    <div class="category-box-name">
                        {{category.name}}
                    </div>
                </ion-slide>
            </ion-slides>
            <!-- Add Arrows -->
            <div class="swiper-button-next" #nextButton></div>
            <div class="swiper-button-prev" #prevButton></div>
        </div>
    </div>
    `
})
export class CategoryPage implements OnInit {
    @ViewChild('categorySlider') categorySlider: Slides;
    @ViewChild('nextButton') nextButton: ElementRef;
    @ViewChild('prevButton') prevButton: ElementRef;

    public categories: Array<Category>;

    constructor(private categoryService: CategoryService) {

    }

    
  ngOnInit() {
    this.categorySlider.slidesPerView = 'auto';
    this.categorySlider.freeMode = true;
    this.categorySlider.nextButton = this.nextButton.nativeElement;
    this.categorySlider.prevButton = this.prevButton.nativeElement
    
    this.categorySlider.nextButton.onclick = ($event) => {
        this.categorySlider.slideNext();
    };
    this.categorySlider.prevButton.onclick = ($event) => {
        this.categorySlider.slidePrev();
    };
  }

  ionViewWillEnter() {
    this.categoryService.getHomepageCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}