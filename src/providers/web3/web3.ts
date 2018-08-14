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

    this.web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

    if(!this.web3.isConnected()) {
      console.log("not connected");
    }
    else {
      console.log("connected");
    }

    console.log(this.web3);
   
  }

}
