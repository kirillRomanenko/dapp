import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTokensPage } from './create-tokens';

@NgModule({
  declarations: [
    CreateTokensPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTokensPage),
  ],
})
export class CreateTokensPageModule {}
