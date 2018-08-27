import { Component, OnInit } from '@angular/core';
import { NavParams, ItemSliding } from 'ionic-angular';
import { NotificationsService } from '../../services/notifications.service';
import { NotifyMsg } from '../../models/notification.interface';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage implements OnInit {
  notifications: NotifyMsg[] = [];
  unreadCount = 0;

  constructor(
    public navParams: NavParams,
    private notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationService.getNotifications()
      .subscribe((data: NotifyMsg[]) => {
        this.notifications = data;
        this.checkUnreadMsgs();
      });
  }

  slideClicked(notification: NotifyMsg) {
    if (notification.unread) {
      notification.unread = false;
      this.checkUnreadMsgs();
      this.notificationService.updateNotification(notification)
        .subscribe((data => console.log('Patched')));
    }
  }



  markUnread(notification: NotifyMsg, slidingItem: ItemSliding) {
    if (!notification.unread) {
      notification.unread = true;
      slidingItem.close();
      this.checkUnreadMsgs();
      this.notificationService.updateNotification(notification)
        .subscribe((data => console.log('Patched')));
    }
  }

  private checkUnreadMsgs() {
    this.unreadCount = this.notifications.filter(notification => notification.unread).length;
  }

  

}
