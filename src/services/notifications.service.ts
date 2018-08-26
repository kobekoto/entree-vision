import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class NotificationsService {
    constructor(private http: HttpClient) {}

    getNotifications() {
        return this.http
            .get<Notification[]>(' http://localhost:3000/notifications');
    }
}
