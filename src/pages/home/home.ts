import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { CommonProvider } from './../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public common: CommonProvider, public events: Events) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  locationjump(data) {
    this.navCtrl.push(data);
  }
}
