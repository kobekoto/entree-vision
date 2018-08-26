import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuService } from '../../services/menus.service';
import { MenuCategoryPage } from '../menu-category/menu-category';
import { MealMenu } from '../../models/meal-menu.interface';

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
  menus: MealMenu[] = [];

  constructor(
    private menuService: MenuService,
    private navCtrl: NavController) {}

  ngOnInit() {
      this.menuService.getMenus()
        .subscribe(
          data => this.menus = data
        )
    }

    goToMenuCategory(menu) {
      this.navCtrl.push(MenuCategoryPage, { menu });
    }

}
