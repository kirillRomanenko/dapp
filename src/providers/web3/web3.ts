import { Injectable } from '@angular/core';
import Web3 from 'web3';
/*
  Generated class for the Web3Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Web3Provider {

  web3: any = new Web3();

  constructor() {
    console.log('Hello Web3Provider Provider');
    if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    console.log(this.web3);
  }

}
