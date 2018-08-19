import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenusPage } from './menus';
import { CategoryComponent } from '../../components/category/category';

@NgModule({
  declarations: [
    MenusPage,
    CategoryComponent
  ],
  imports: [
    IonicPageModule.forChild(MenusPage),
  ],
})
export class MenusPageModule {}
