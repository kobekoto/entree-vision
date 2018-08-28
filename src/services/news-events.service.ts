import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewsEvent } from "../models/news-event.interface";
import { ENV } from "../environments/environment";

@Injectable()
export class NewsEventsService {
    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http
            .get<NewsEvent[]>(`${ENV.API_URL}/newsandevents`)
            
    }
}
