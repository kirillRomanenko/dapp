import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhoIsPage } from './who-is';

@NgModule({
  declarations: [
    WhoIsPage,
  ],
  imports: [
    IonicPageModule.forChild(WhoIsPage),
  ],
})
export class WhoIsPageModule {}
