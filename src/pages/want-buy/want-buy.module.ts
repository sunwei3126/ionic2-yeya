import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WantBuyPage } from './want-buy';

@NgModule({
  declarations: [
    WantBuyPage,
  ],
  imports: [
    IonicPageModule.forChild(WantBuyPage),
  ],
  exports: [
    WantBuyPage
  ]
})
export class WantBuyPageModule {}
