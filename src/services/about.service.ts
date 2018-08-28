import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Staff } from "../models/about.interface";

@Injectable()
export class AboutService {
    constructor(private http: HttpClient) {}

    getStaff() {
        return this.http
            .get<Staff[]>('http://localhost:3000/about')
    }
}
