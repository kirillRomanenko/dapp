import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YourProvider } from '../../providers/your/your';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public yourProvider : YourProvider) {

  }

  ionViewDidLoad() {
   this.testAnim('animationSandbox', 'fadeInLeftBig');
     this.yourProvider.openShare(); 
  }

  testAnim(id, effect) {
            $('#' + id).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass();
            });
          };


}
