import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
export class MsgModalPage {

  constructor(public viewCtrl: ViewController) {}

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
