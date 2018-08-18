import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenusPage } from '../menus/menus';
import { ReservationsPage } from '../reservations/reservations';
import { NewsEventsPage } from '../news-events/news-events';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  menusPage = MenusPage;
  reservationsPage = ReservationsPage;
  newsEventsPage = NewsEventsPage;
  aboutPage = AboutPage;
  contactPage = ContactPage;


}
