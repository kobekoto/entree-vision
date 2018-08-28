import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage implements OnInit {
  videoUrl: any;

  constructor(
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoUrl = this.getIframeSrc();
  }

  getIframeSrc() {
    return this.sanitizer
      .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pMN5D5FWCxI?&showinfo=0');
  }

  

}
