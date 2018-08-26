import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LanguagePage } from '../pages/language/language';
import { LoginPage } from '../pages/login/login';
import { PinPage } from '../pages/pin/pin';
import { PinconfirmPage } from '../pages/pinconfirm/pinconfirm';
import { RegPage } from '../pages/reg/reg';
import { SendPage } from '../pages/send/send';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { Web3Provider } from '../providers/web3/web3';
import { AnimationProvider } from '../providers/animation/animation';
import { LanguageProvider } from '../providers/language/language';
import { WhoIsPage } from '../pages/who-is/who-is';
import { TokensPage } from '../pages/tokens/tokens';
import { DetailsPage } from '../pages/details/details';
import { LkPage } from '../pages/lk/lk';
import { CreateTokensPage } from '../pages/create-tokens/create-tokens';
import { DeletePage } from '../pages/delete/delete';
import { DetailsCompanyPage } from '../pages/details-company/details-company';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    PinPage,
    PinconfirmPage,
    RegPage,
    SendPage,
    TutorialPage,
    WhoIsPage,
    TokensPage,
    DetailsPage,
    LkPage,
    CreateTokensPage,
    DeletePage,
    DetailsCompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    PinPage,
    PinconfirmPage,
    RegPage,
    SendPage,
    TutorialPage,
    WhoIsPage,
    TokensPage,
    DetailsPage,
    LkPage,
    CreateTokensPage,
    DeletePage,
    DetailsCompanyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Web3Provider,
    AnimationProvider,
    LanguageProvider
  ]
})
export class AppModule {}
