import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegClientPage } from './reg-client';

@NgModule({
  declarations: [
    RegClientPage,
  ],
  imports: [
    IonicPageModule.forChild(RegClientPage),
  ],
})
export class RegClientPageModule {}
