import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {
  hideMeCompany=false;
  hideMeClient=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }
  hideDisabledCompany(){
    return this.hideMeCompany=false;
  }
  hideDisabledClient(){
    return this.hideMeClient=false;
  }

  hideCompany(){
    this.hideDisabledClient();
    return this.hideMeCompany=true;
  }
  hideClient(){
    this.hideDisabledCompany();
    return this.hideMeClient=true;
  }

}
