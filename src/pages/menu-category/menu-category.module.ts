import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuCategoryPage } from './menu-category';
import { CategoryComponent } from '../../components/category/category';

@NgModule({
  declarations: [
    MenuCategoryPage,
    CategoryComponent
  ],
  imports: [
    IonicPageModule.forChild(MenuCategoryPage),
  ],
})
export class MenuCategoryPageModule {}
