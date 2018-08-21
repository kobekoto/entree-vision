import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MealMenu } from "../models/meal-menu";
 
@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {}

    getMenus() {
        return this.http
            .get<MealMenu[]>('http://localhost:3000/menus')
    }
}
