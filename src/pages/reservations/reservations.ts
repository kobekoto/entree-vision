import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ReservationsService } from '../../services/reservations.service';
import { NgForm } from '@angular/forms';
import { ReservationModalPage } from '../reservation-modal/reservation-modal';
import { DaysOfWeek } from '../../models/days-of-week.interface';

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
  daysOfWeek: DaysOfWeek[] = [];
  private minDate: string;
  private maxDate: string;
  private bookedReservation: boolean = false;
  private reservationInfo: {};
  
  constructor(
    private reservationService: ReservationsService,
    private modalCtrl: ModalController) {} 

  ngOnInit() {
    this.reservationService.getTimes()
      .subscribe(
        data => this.daysOfWeek = data
      );
    this.minDate = new Date().toISOString();
    // maxDate set in form is 2 weeks from today
    this.maxDate = new Date(+new Date + 12096e5).toISOString();
  }

  submitReservation(form: NgForm) {
    this.bookedReservation = true;
    if (form.valid) {
      let reservationModal = this.modalCtrl.create(ReservationModalPage, { reservationInfo: form.value });
      reservationModal.present();
      reservationModal.onDidDismiss(data => {
        this.reservationInfo = {
          bookingDate: data.date,
          bookingTime: data.time,
          guestsNum: data.guestsNum
        };
      })

      // Clear form values
      form.reset();
    }
  }

  switchBooking() {
    this.bookedReservation = false;
  }

}
