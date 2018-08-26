import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ReservationsService } from '../services/reservations.service'; 
import { MenuCategoryPage } from '../pages/menu-category/menu-category';
import { MsgModalPage } from '../pages/msg-modal/msg-modal';
import { SMS } from '@ionic-native/sms';
import { ReservationModalPage } from '../pages/reservation-modal/reservation-modal';
import { NewsEventsService } from '../services/news-events.service';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NotificationsService } from '../services/notifications.service';

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
    MenuCategoryPage,
    MsgModalPage,
    ReservationModalPage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
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
    MenuCategoryPage,
    MsgModalPage,
    ReservationModalPage,
    NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService,
    SMS,
    ReservationsService,
    NewsEventsService,
    NotificationsService
  ]
})
export class AppModule {}
