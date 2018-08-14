import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {TutorialPage} from '../tutorial/tutorial';
/**
 * Generated class for the LanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, private storage: Storage
  ) {
      this.storage.set('lang', 'en');
      this.refreshPageLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

  refreshPageLanguage() {
    this.events.subscribe('reloadLanguage',() => {
      // this.navCtrl.pop();
      this.navCtrl.setRoot(LanguagePage);
     });
  }

  openTutorial(){
    this.navCtrl.push(TutorialPage);
  }

  setLanguage(lang) { 
    this.storage.set('lang', lang);
    console.log(lang);
  }

}
