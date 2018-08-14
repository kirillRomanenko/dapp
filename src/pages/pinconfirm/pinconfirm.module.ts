import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinconfirmPage } from './pinconfirm';

@NgModule({
  declarations: [
    PinconfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(PinconfirmPage),
  ],
})
export class PinconfirmPageModule {}
