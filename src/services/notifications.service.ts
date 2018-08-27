import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NotifyMsg } from "../models/notification.interface";


@Injectable()
export class NotificationsService {
    constructor(private http: HttpClient) {}

    getNotifications() {
        return this.http
            .get<NotifyMsg[]>('http://localhost:3000/notifications');
    }

    updateNotification(notification: NotifyMsg) {
        return this.http
            .patch(`http://localhost:3000/notifications/${notification.id}`,{ "unread" : notification.unread });
    }
}
