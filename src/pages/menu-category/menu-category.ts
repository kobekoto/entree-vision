import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { MealMenu } from '../../models/meal-menu';
import { MsgModalPage } from '../msg-modal/msg-modal';

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

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController) {}

  ngOnInit() {
    this.mealMenu = this.navParams.data.menu;
  }

  showMsgModal(meal) {
    let msgModal = this.modalCtrl.create(MsgModalPage, { meal });
    msgModal.present();
    console.log(meal);
  }

  

}
