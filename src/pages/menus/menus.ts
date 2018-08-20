import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menus.service';

/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage implements OnInit {
  menus = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
      this.menuService.getMenus()
        .subscribe(
          data => {
            this.menus = data;
          }
        )
    }

}
