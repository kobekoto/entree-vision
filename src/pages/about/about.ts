import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  videoUrl: SafeResourceUrl;
  staffMembers: Staff[];

  constructor(
    private sanitizer: DomSanitizer,
    private aboutService: AboutService) {}

  ngOnInit() {
    this.videoUrl = this.sanitizer
    .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pMN5D5FWCxI?&showinfo=0');
    this.aboutService.getStaff()
      .subscribe(
        data => this.staffMembers = data
      );
  }

}
