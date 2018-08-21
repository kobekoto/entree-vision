import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { MenusPage } from '../pages/menus/menus';
import { ReservationsPage } from '../pages/reservations/reservations';
import { NewsEventsPage } from '../pages/news-events/news-events';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryComponent } from '../components/category/category';
import { MenuService } from '../services/menus.service';
import { MenuCategoryPage } from '../pages/menu-category/menu-category';

@NgModule({
  declarations: [
    MyApp,
    MenusPage,
    ReservationsPage,
    NewsEventsPage,
    AboutPage,
    ContactPage,
    TabsPage,
    CategoryComponent,
    MenuCategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenusPage,
    ReservationsPage,
    NewsEventsPage,
    AboutPage,
    ContactPage,
    TabsPage,
    MenuCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService
  ]
})
export class AppModule {}
