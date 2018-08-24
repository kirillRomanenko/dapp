import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {TutorialPage} from '../tutorial/tutorial';
import {fs} from 'file-system';
import {solc} from 'solc';

import * as $ from 'jquery';

//import { Web3Provider } from '../../providers/web3/web3';

import Web3 from 'web3';

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

  web3: any = new Web3();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events, private storage: Storage, //public Web3: Web3Provider
  ) {

    this.web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

    if(!this.web3.isConnected()) {
      console.log("not connected");
    }
    else {
      console.log("connected");
    }

      this.storage.set('lang', 'en');
      this.refreshPageLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
    console.log(this.web3);
    
    console.log('account:', this.web3.eth.coinbase);
    let initialBalance = this.web3.eth.getBalance(this.web3.eth.coinbase);
    console.log('Balance:', this.web3.fromWei(initialBalance.toNumber()));
    console.log('BALANCE CONTRACT:',this.checkBalances('0xEb1C8B51D677DB69319e15237c959B0603B74697'));
    // this.createContract();
  }



     // Баланс контракта
    // padTokens(s, n) {
    //   let o = s.toPrecision(n);
    //   while (o.length < n) {
    //     o = " " + o;
    //   }
    //   return o;
    // }

    checkBalances(GZBAddress) {
      let GZBABI = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "GAZPROMBANK" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "GZB" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];
      
      let SmartGZBAddress = "0xEb1C8B51D677DB69319e15237c959B0603B74697"; // адрес контракта!!
      let FXN = this.web3.eth.contract(GZBABI).at(SmartGZBAddress);
    
      //  var tokens = FXN.balanceOf(FXNAddress) / parseFloat(1e16);
      // var tokens = FXN.balanceOf(GZBAddress) / parseFloat(1e2);
      let tokens = FXN.balanceOf(GZBAddress)/Math.pow(10,0);
      
    
        // return this.padTokens(tokens, 1);
        return tokens;
    
    };

    // createContract() {
    //   //компилирование контракта из файла
    //   const input = fs.readFileSync('../../assets/res/GZBToken.sol');
    //   $.get( "../assets/res/GZBToken.sol", function( input ) {
    //  //   console.log( data );
    //       const output = solc.compile(input, 1).contracts[':GZBTOKEN'];
    //       const bytecode = output.contracts['GZBTOKEN'].bytecode;
    //       const abi = JSON.parse(output.contracts['GZBTOKEN'].interface);
    //       // Contract object
    //       const contract = this.web3.eth.contract(abi);
    //       // Deploy contract instance
    //       const contractInstance = contract.new({
    //         data: '0x' + bytecode,
    //         from: this.web3.eth.coinbase,
    //         gas: 90000*2
    //       }, (err, res) => {
    //           if (err) {
    //           console.log(err);
    //           return;
    //         }
    
    //   // Log the tx, you can explore status with eth.getTransaction()
    //       //console.log(res.transactionHash);
    
    //   // If we have an address property, the contract was deployed
    //       if (res.address) {
    //         console.log('Contract address: ' + res.address);
    //       // Let's test the deployed contract
    //       testContract(res.address);  //временно закоментил, т.к. не доделал
    //       }
    //     });
    //     function testContract(address) {
    //       // Reference to the deployed contract
    //      const token = contract.at(address);
    //       // Destination account for test
    //       const dest_account = '0x05075fDE6AA5913E5AEd5A28688a33e53C75Eb3d';
       
    //    //   // Assert initial account balance, should be 100000
    //       const balance1 = token.balances.call(this.web3.eth.coinbase);
    //       console.log(balance1 == 1000000);
       
    //    //   // Call the transfer function
    //       token.transfer(dest_account, 100, {from: this.web3.eth.coinbase}, (err, res) => {
    //          // Log transaction, in case you want to explore
    //           console.log('tx: ' + res);
    //           // Assert destination account balance, should be 100 
    //          const balance2 = token.balances.call(dest_account);
    //          console.log(balance2 == 100);
    //       });
    //     }
          
    //   });



      // const output = solc.compile(input, 1);
      // const bytecode = output.contracts['GZBTOKEN'].bytecode;
      // const abi = JSON.parse(output.contracts['GZBTOKEN'].interface);

      // Contract object
      // const contract = this.web3.eth.contract(abi);

      // Deploy contract instance
  //   const contractInstance = contract.new({
  //       data: '0x' + bytecode,
  //       from: this.web3.eth.coinbase,
  //       gas: 90000*2
  //     }, (err, res) => {
  //         if (err) {
  //         console.log(err);
  //         return;
  //       }

  // // Log the tx, you can explore status with eth.getTransaction()
  //     //console.log(res.transactionHash);

  // // If we have an address property, the contract was deployed
  //     if (res.address) {
  //       console.log('Contract address: ' + res.address);
  //     // Let's test the deployed contract
  //     testContract(res.address);  //временно закоментил, т.к. не доделал
  //     }
  //   });
// // Quick test the contract

//  function testContract(address) {
//    // Reference to the deployed contract
//   const token = contract.at(address);
//    // Destination account for test
//    const dest_account = '0x05075fDE6AA5913E5AEd5A28688a33e53C75Eb3d';

// //   // Assert initial account balance, should be 100000
//    const balance1 = token.balances.call(this.web3.eth.coinbase);
//    console.log(balance1 == 1000000);

// //   // Call the transfer function
//    token.transfer(dest_account, 100, {from: this.web3.eth.coinbase}, (err, res) => {
//       // Log transaction, in case you want to explore
//        console.log('tx: ' + res);
//        // Assert destination account balance, should be 100 
//       const balance2 = token.balances.call(dest_account);
//       console.log(balance2 == 100);
//    });
//  }


    //  } //create contract method end
    
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
