import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DaysOfWeek } from "../models/days-of-week.interface";
import { ENV } from "../environments/environment";

@Injectable()
export class ReservationsService {
    constructor(private http: HttpClient) {}

    getTimes() {
        return this.http
            .get<DaysOfWeek[]>(`${ENV.API_URL}/times`)
    }
}
