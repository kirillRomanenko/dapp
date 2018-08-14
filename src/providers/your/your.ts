 import { Injectable } from '@angular/core';

/*
  Generated class for the YourProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YourProvider {

  constructor() {
    console.log('Hello YourProvider Provider');
  }
  openShare() {console.log("button clicked")} 
}
