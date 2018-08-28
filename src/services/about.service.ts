import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Staff } from "../models/about.interface";
import { ENV } from "../environments/environment";

@Injectable()
export class AboutService {
    constructor(private http: HttpClient) {}

    getStaff() {
        return this.http
            .get<Staff[]>(`${ENV.API_URL}/about`)
    }
}
ENV