import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandsAllPage } from './brands-all';
import { BrandCategoryComponentModule } from '../../components/brand-category/brand-category.module'

@NgModule({
  declarations: [
    BrandsAllPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandsAllPage),
    BrandCategoryComponentModule
  ],
  exports: [
    BrandsAllPage
  ]
})
export class BrandsAllPageModule {}
