import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MsgModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-msg-modal',
  templateUrl: 'msg-modal.html',
})
export class MsgModalPage implements OnInit {
  private mealName: string;
  private meal: string;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams) {}

  ngOnInit() {
    this.mealName = this.navParams.get('meal');
    this.meal = `The ${this.mealName} at Entree Vision is amazing. OMG you've GOT to check it out.`
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
