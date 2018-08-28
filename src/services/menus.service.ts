import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MealMenu } from "../models/meal-menu.interface";
import { ENV } from "../environments/environment";

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {}

    getMenus() {
        return this.http
            .get<MealMenu[]>(`${ENV.API_URL}/menus`)
    }
}
