import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendPage } from '../send/send';
import { DeletePage } from '../delete/delete';

/**
 * Generated class for the PinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class PinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openDelete() {
    this.navCtrl.push(DeletePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PinPage');
  }
  openSend() {
    this.navCtrl.push(SendPage);
  }
}
