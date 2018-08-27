import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DeletePage } from '../delete/delete';
import { SendPage } from '../send/send';
import { CreateTokensPage } from '../create-tokens/create-tokens';
import { DetailsPage } from '../details/details';
import { DetailsCompanyPage } from '../details-company/details-company';

/**
 * Generated class for the LkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lk',
  templateUrl: 'lk.html',
})
export class LkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LkPage');
  }
  openCreateTokensPage(){
    this.navCtrl.push(CreateTokensPage);
  }
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
  openDelete() {
    this.navCtrl.push(DeletePage);
  }
  openSend() {
    this.navCtrl.push(SendPage);
  }
  openDetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
  openDetailsCompanyPage(){
    this.navCtrl.push(DetailsCompanyPage);
  }
}
