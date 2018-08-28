import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutService } from '../../services/about.service';
import { Staff } from '../../models/about.interface';

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
  staffMembers: Staff[];

  constructor(
    private sanitizer: DomSanitizer,
    private aboutService: AboutService) {}

  ngOnInit() {
    this.videoUrl = this.getIframeSrc();
    this.aboutService.getStaff()
      .subscribe(
        data => this.staffMembers = data
      );
  }

  getIframeSrc() {
    return this.sanitizer
      .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pMN5D5FWCxI?&showinfo=0');
  }

}
