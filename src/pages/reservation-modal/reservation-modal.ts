import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReservationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reservation-modal',
  templateUrl: 'reservation-modal.html',
})
export class ReservationModalPage implements OnInit {
  private reservationInfo: {};

  constructor(
    public navParams: NavParams, 
    public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.reservationInfo = this.navParams.get('reservationInfo');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.reservationInfo);
  }

}
