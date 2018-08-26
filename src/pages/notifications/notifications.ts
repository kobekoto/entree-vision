import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationsService } from '../../services/notifications.service';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage implements OnInit {
  notifications: Notification[] = [];
  
  constructor(
    public navParams: NavParams,
    private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationService.getNotifications()
      .subscribe(
        data => this.notifications = data
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
