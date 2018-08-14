import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AnimationProvider } from '../../providers/animation/animation';
import { LanguageProvider } from '../../providers/language/language';
import * as $ from 'jquery';
import { LoginPage } from '../login/login';
import { LanguagePage } from '../language/language';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  lang: any = 'none';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public GFCtrl: AnimationProvider, public Lang: LanguageProvider,
              private storage: Storage,
              public events: Events) {
                this.refreshPageTutorial();
                this.storage.get('lang').then((val) => {
                  if (val === 'ru') {
                    this.lang = "ru";
                  } else {
                    this.lang = "en";
                  }
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }
  refreshPageTutorial() {
    this.events.subscribe('reloadTutorial',() => {
      this.navCtrl.pop();
      this.navCtrl.push(TutorialPage);
     });
  }

  language(id) {
    return this.Lang.Get(this.lang, id)
  }
  


  DotNext() {
    var elems = $(".DotSelesct");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i) {
      if($(elems[i]).attr('id') == "active")
      {
        i++;
        if(i<elemsTotal) {
          $(elems[i-1]).attr('id', "none");
          $(elems[i]).attr('id', "active");
          break;
        }
        else break;
      }
    }
  }

  GetBlock() {
    var elems = $(".block");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i) {
      if($(elems[i]).attr('id') == "show")
      {
        return i;
      }
    }
  }



  DotPrev() {
    var elems = $(".DotSelesct");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i) {
      if($(elems[i]).attr('id') == "active")
      {
        i--;
        if(i>=0) {
          $(elems[i+1]).attr('id', "none");
          $(elems[i]).attr('id', "active");
          break;
        }
        else break;
      }
    }
  }

  BlockNext(IN, OUT) {
    var elems = $(".block");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i) {
      if($(elems[i]).attr('id') == "show")
      {
        i++;
        if(i<elemsTotal) {
          this.DotNext();
          $(elems[i-1]).attr('id', "none");
          $(elems[i]).attr('id', "show");

          this.GFCtrl.Animation('X' + IN + 'animation', 'fadeOutLeft');
          this.GFCtrl.Animation('X' + OUT + 'animation', 'fadeInRight');

          this.GFCtrl.Animation('X' + IN + 'text', 'fadeOutUp');
          this.GFCtrl.Animation('X' + OUT + 'text', 'fadeInUp');

          break;
        }
        else break;
      }
    }
  }

  BlockPrev(IN, OUT) {
    var elems = $(".block");
    var elemsTotal = elems.length;
    for(var i=0; i<elemsTotal; ++i) {
      if($(elems[i]).attr('id') == "show")
      {
        i--;
        if(i>=0) {
          this.DotPrev();
          $(elems[i+1]).attr('id', "none");
          $(elems[i]).attr('id', "show");

          this.GFCtrl.Animation('X' + OUT + 'animation', 'fadeInLeft');
          this.GFCtrl.Animation('X' + IN + 'animation', 'fadeOutRight');

          this.GFCtrl.Animation('X' + IN + 'text', 'fadeOutUp');
          this.GFCtrl.Animation('X' + OUT + 'text', 'fadeInUp');


          break;
        }
        else break;
      }
    }
  }

  next() {
    var id = this.GetBlock();
    this.BlockNext(id++, id);
  } 

  prev() {
    var id = this.GetBlock();
    this.BlockPrev(id--, id);
  }

  openLogin(){
    this.navCtrl.push(LoginPage);
  }

  openLanguage(){
    // this.navCtrl.push(LanguagePage);
    this.navCtrl.pop();
    this.events.publish('reloadLanguage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  swipeEvent(e) {
    if (e.direction == 2) {
      this.next();
    }

    if (e.direction == 4) {
      this.prev();
    }
}
  setTutorial() { // шаблон запроса
    // set a key/value
    this.storage.set('name', 'Max');
  }

  getTutorial() { // шаблон запроса
    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }

}
