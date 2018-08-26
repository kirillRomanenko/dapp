import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsCompanyPage } from './details-company';

@NgModule({
  declarations: [
    DetailsCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsCompanyPage),
  ],
})
export class DetailsCompanyPageModule {}
