import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MealMenu } from '../../models/meal-menu';

/**
 * Generated class for the MenuCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-category',
  templateUrl: 'menu-category.html',
})
export class MenuCategoryPage implements OnInit {
  private mealMenu: MealMenu;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.mealMenu = this.navParams.data.menu;
    console.log(this.mealMenu); 
  }

  

}
