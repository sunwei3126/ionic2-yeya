import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanysAllPage } from './companys-all';
import { BrandCategoryComponentModule } from '../../components/brand-category/brand-category.module'


@NgModule({
  declarations: [
    CompanysAllPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanysAllPage),
    BrandCategoryComponentModule
  ],
  exports: [
    CompanysAllPage
  ]
})
export class CompanysAllPageModule {}
