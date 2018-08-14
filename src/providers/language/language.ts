import { Injectable } from '@angular/core';

/*
  Generated class for the LanguageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageProvider {

  en: any[] = [];
  ru: any[] = [];

  constructor() {
    this.en[0] = 'next'; this.ru[0] = 'далее';
    this.en[1] = 'prev'; this.ru[1] = 'назад';
  }

  Get(Language, IdElement) {
    if(Language == 'en') {
      return this.en[IdElement];
    }

    if(Language == 'ru') {
      return this.ru[IdElement];
    }
  }

}
