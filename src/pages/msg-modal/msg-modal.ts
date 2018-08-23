import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { NgForm } from '@angular/forms';

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
    public navParams: NavParams,
    private sms: SMS) {}

  ngOnInit() {
    this.mealName = this.navParams.get('meal');
    this.meal = `The ${this.mealName} at Entree Vision is amazing. OMG you've GOT to check it out.`
  }

  submitMsg(form: NgForm) {
    let options = {
      android: {
        intent: 'INTENT' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
      }
    };

    this.sms
      .send(form.value.phoneNum, form.value.meal, options)
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });  
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}
