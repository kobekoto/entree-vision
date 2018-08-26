import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NewsEventsService } from '../../services/news-events.service';
import { NewsEvent } from '../../models/news-event.interface';

/**
 * Generated class for the NewsEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-events',
  templateUrl: 'news-events.html',
})
export class NewsEventsPage implements OnInit {
  events: NewsEvent[] = [];

  constructor(
    public navCtrl: NavController,
    private newsEvtService: NewsEventsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsEventsPage');
  }

  ngOnInit() {
    this.newsEvtService.getEvents()
      .subscribe(
        data => this.events = data
      )
  }

}
