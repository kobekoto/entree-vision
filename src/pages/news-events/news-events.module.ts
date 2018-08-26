import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsEventsPage } from './news-events';
import { CategoryComponent } from '../../components/category/category';

@NgModule({
  declarations: [
    NewsEventsPage,
    CategoryComponent
  ],
  imports: [
    IonicPageModule.forChild(NewsEventsPage),
  ],
})
export class NewsEventsPageModule {}
