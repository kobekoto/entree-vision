import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenusPage } from '../pages/menus/menus';
import { ReservationsPage } from '../pages/reservations/reservations';
import { NewsEventsPage } from '../pages/news-events/news-events';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryComponent } from '../components/category/category';

@NgModule({
  declarations: [
    MyApp,
    MenusPage,
    ReservationsPage,
    NewsEventsPage,
    AboutPage,
    ContactPage,
    TabsPage,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenusPage,
    ReservationsPage,
    NewsEventsPage,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
