import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { EshopApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SliderPage } from '../pages/slider/slider.page';
import { CategoryPage } from '../pages/category/category.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoryService } from '../pages/category/category.service';

@NgModule({
  declarations: [
    EshopApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SliderPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(EshopApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EshopApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
