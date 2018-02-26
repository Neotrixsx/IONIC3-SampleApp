import { DeviceAccounts } from '@ionic-native/device-accounts';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { CommonProvider } from './../providers/common/common';
import { Network } from '@ionic-native/network';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "HomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public network: Network, public common: CommonProvider, private androidPermissions: AndroidPermissions, private deviceAccounts: DeviceAccounts) {
    platform.ready().then((readySource) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // // -=watch network 
      this.network.onDisconnect().subscribe(() => {
        this.common.presentToast('Oops! The network was disconnected :-(', "top");
      });
      this.network.onConnect().subscribe(() => {
        this.common.presentToast("We got a " + this.network.type + " connection, woohoo!", "top");
      });

      //DeviceAccounts And AndroidPermissions
      if (readySource == 'cordova') {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.GET_ACCOUNTS).then(
          result => {
            console.log('Has permission?', result.hasPermission)
            this.deviceAccounts.get()
              .then(accounts => console.log(accounts))
              .catch(error => console.error(error));
          },
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.GET_ACCOUNTS)
        );

        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
      }

    });
  }

  errorHandler(event) {
    event.target.src = "assets/img/no-photo-profile.jpg";
  }

  openPage(data) {
    this.nav.setRoot(data);
  }

}

