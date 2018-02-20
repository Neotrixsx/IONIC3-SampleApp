import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

import { CommonProvider } from './../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, public common: CommonProvider, public events: Events) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  locationjump(data) {
    this.navCtrl.push(data);
  }

  share(data) {
    if (data == 'whatsapp') {
      this.socialSharing.shareViaWhatsApp('Fat to Fit Application where user get easy tips to reduse Body and Belly fat and they know there BMI. Play Store Download link:- ', '', 'https://play.google.com/store/apps/details?id=com.samroidapps.fattofittips').then(() => {
        console.log('shareViaWhatsApp');
      }).catch((e) => {
        console.log(e);
        this.common.presentToast('WhatsApp not install in your device!!!', 'top');
      });
    }
    else if (data == 'fb') {
      this.socialSharing.shareViaFacebook('Fat to Fit Application where user get easy tips to reduse Body and Belly fat and they know there BMI. Play Store Download link:- ', '', 'https://play.google.com/store/apps/details?id=com.samroidapps.fattofittips').then(() => {
        console.log('shareViaFacebook');
      }).catch((e) => {
        console.log(e);
        this.common.presentToast('Facebook not install in your device!!!', 'top');
      });
    }
    else if (data == 'share') {
      this.socialSharing.share('Fat to Fit Application where user get easy tips to reduse Body and Belly fat and they know there BMI. Play Store Download link:-  share', 'Download Awesome App', '', 'https://play.google.com/store/apps/details?id=com.samroidapps.fattofittips').then(() => {
        console.log('share');
      }).catch((e) => {
        console.log(e);
      });
    }
  }
}
