import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the TokensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokens',
  templateUrl: 'tokens.html',
})
export class TokensPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokensPage');
  }

  openDetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
  
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
}
