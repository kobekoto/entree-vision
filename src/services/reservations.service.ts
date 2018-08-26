import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DaysOfWeek } from "../models/days-of-week";

@Injectable()
export class ReservationsService {
    constructor(private http: HttpClient) {}

    getTimes() {
        return this.http
            .get<DaysOfWeek>('http://localhost:3000/times')
    }
}