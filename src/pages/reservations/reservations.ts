import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationsService } from '../../services/reservations.service';

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
export class ReservationsPage implements OnInit {
  private daysOfWeek: [];
  
  constructor(
    private reservationService: ReservationsService) {} 

  ngOnInit() {
    this.reservationService.getTimes()
      .subscribe(
        data => this.daysOfWeek = data
      );
  }

}
