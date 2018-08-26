import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewsEvent } from "../models/news-event.interface";


@Injectable()
export class NewsEventsService {
    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http
            .get<NewsEvent[]>('http://localhost:3000/newsandevents')
    }
}
