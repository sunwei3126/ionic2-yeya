import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindGoodsPage } from './find-goods';

@NgModule({
  declarations: [
    FindGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(FindGoodsPage),
  ],
  exports: [
    FindGoodsPage
  ]
})
export class FindGoodsPageModule {}
