import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Web3Provider } from '../../providers/web3/web3';
import { LanguageProvider } from '../../providers/language/language';
//import { Storage } from '@ionic/storage';
import * as $ from 'jquery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lang: any = 'none';
  constructor(public navCtrl: NavController, 
              public Web3: Web3Provider, 
             // private storage: Storage, 
              public events: Events, public Lang: LanguageProvider) {

                this.refreshPageHome();
/*
                this.storage.get('lang').then((val) => {
                  if (val === 'ru') {
                    this.lang = "ru";
                  } else {
                    this.lang = "en";
                  }
                });
*/
  }

  ionViewDidLoad() {
     
  }

  refreshPageHome() {
    this.events.subscribe('reloadHome',() => {
      this.navCtrl.pop();
      this.navCtrl.push(HomePage);
     });
  }

  language(id) {
    return this.Lang.Get(this.lang, id)
  }
  




}
