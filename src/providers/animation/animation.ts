import { Injectable } from '@angular/core';
import * as $ from 'jquery'

/*
  Generated class for the AnimationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimationProvider {

  constructor() {
    console.log('Hello AnimationProvider Provider');
  }

  Animation(id, effect) {
    $('#' + id).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

}
