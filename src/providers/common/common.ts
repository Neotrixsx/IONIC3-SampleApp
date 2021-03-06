import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

@Injectable()
export class CommonProvider {
  public loader: any;
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, private themeableBrowser: ThemeableBrowser, public spinnerDialog: SpinnerDialog) {
    console.log('Hello CommonProvider Provider');
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({ content: "Please wait ..." })
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  presentToast(msg, position) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: position  //"top", "middle", "bottom".
    });
    toast.present();
  }

  presentToastButtom(msg) {
    let toast = this.toastCtrl.create({
      message: msg, //Your internet connection appears to be offline. Data integrity is not guaranteed.
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: "Close",
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  openpage(url, title) {
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#7c4dff'
      },
      toolbar: {
        height: 44,
        color: '#7c4dff'
      },
      title: {
        color: '#ffffff',
        // showPageTitle: true
        staticText: title
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      // forwardButton: {
      //   image: 'forward',
      //   imagePressed: 'forward_pressed',
      //   align: 'left',
      //   event: 'forwardPressed'
      // },
      closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
      },
      // customButtons: [
      //   {
      //     image: 'share',
      //     imagePressed: 'share_pressed',
      //     align: 'right',
      //     event: 'sharePressed'
      //   }
      // ],
      // menu: {
      //   image: 'menu',
      //   imagePressed: 'menu_pressed',
      //   title: 'Test',
      //   cancel: 'Cancel',
      //   align: 'right',
      //   items: [
      //     {
      //       event: 'helloPressed',
      //       label: 'Hello World!'
      //     },
      //     {
      //       event: 'testPressed',
      //       label: 'Test!'
      //     }
      //   ]
      // },
      backButtonCanClose: true
    };

    const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', options);
    browser.on('loadstart').subscribe(event => {
      console.log("loadstart");
      this.spinnerDialog.show("Loading...", " Please Wait...");
    })
    browser.on('loadstop').subscribe(event => {
      console.log("loadstop");
      this.spinnerDialog.hide();
    })
    browser.on('closePressed').subscribe(event => {
      console.log("closePressed");
      (<any>window).SpinnerPlugin.activityStop();
      this.spinnerDialog.hide();
    })
  }
}