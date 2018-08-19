import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // TODO: JSON-Server convert and create service
  daysOfWeek = [
    {
      day: 'Monday',
      hours: 'closed'
    },
    {
      day: 'Tuesday',
      hours: '5pm - 11pm'
    },
    {
      day: 'Wednesday',
      hours: '5pm - 11pm'
    },
    {
      day: 'Thursday',
      hours: '5pm - 11pm'
    },
    {
      day: 'Friday',
      hours: '5pm - 11pm'
    },
    {
      day: 'Saturday',
      hours: '5pm - 11pm'
    },
    {
      day: 'Sunday',
      hours: '5pm - 11pm'
    },
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }

}
