import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ReservationsService } from '../../services/reservations.service';
import { NgForm } from '@angular/forms';

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
  private minDate: string;
  private maxDate: string;
  
  
  constructor(
    private reservationService: ReservationsService) {} 

  ngOnInit() {
    this.reservationService.getTimes()
      .subscribe(
        data => this.daysOfWeek = data
      );
    this.minDate = new Date().toISOString();
    this.maxDate = new Date(+new Date + 12096e5).toISOString();
  }

  submitReservation(form: NgForm) {
    console.log(form);
  }

}
