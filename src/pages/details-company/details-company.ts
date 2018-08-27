import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendPage } from '../send/send';

/**
 * Generated class for the DetailsCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-company',
  templateUrl: 'details-company.html',
})
export class DetailsCompanyPage {

  hideBalanceFlag = false;
  hideSendFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsCompanyPage');
  }

  hideDissableBalance() {
    return this.hideBalanceFlag = false;
  }

  hideDissableSend() {
    return this.hideSendFlag = false;
  }

  hideBalance() {
    this.hideDissableSend();
    return this.hideBalanceFlag = true;
  }

  hideSendTokens() {
    this.hideDissableBalance();
    return this.hideSendFlag = true;
  } 

  openSendTokens() {
    this.navCtrl.push(SendPage);
  }
}
