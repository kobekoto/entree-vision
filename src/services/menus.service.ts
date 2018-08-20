import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
 
@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {}

    getMenus() {
        return this.http
            .get('http://localhost:3000/menus')
    }
}