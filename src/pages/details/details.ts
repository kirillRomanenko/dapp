import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  
  hideAccountFlag = false;
  hideDiscountsFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  hideDisabledAccount() {
    return this.hideAccountFlag = false;
  }

  hideDisabledDiscounts() {
    return this.hideDiscountsFlag = false;
  }

  hideAccount() {
    this.hideDisabledDiscounts();
    return this.hideAccountFlag = true;
  }

  hideDiscounts() {
    this.hideDisabledAccount();
    return this.hideDiscountsFlag = true;
  }

}
