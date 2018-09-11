import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, Marker } from '@ionic-native/google-maps';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  map: GoogleMap;
  private destination = {
    lat: 36.127704,
    lng: -115.188433
  };

  constructor(private launchNavigator: LaunchNavigator) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.destination.lat,
           lng: this.destination.lng
         },
         zoom: 17,
         tilt: 30
       }
    };

    Environment.setBackgroundColor('appdark');
    this.map = GoogleMaps.create('google-map', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: '',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.destination.lat,
        lng: this.destination.lng
      }
    });

  }

  navigate() {
    this.launchNavigator.navigate([this.destination.lat, this.destination.lng])
      .then(
        success => console.log('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
      );
  }


}
