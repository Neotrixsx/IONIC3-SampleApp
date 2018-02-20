import { Injectable } from '@angular/core';
import { LoadingController, ToastController, ActionSheetController } from 'ionic-angular';

@Injectable()
export class CommonProvider {
  public loader: any;
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, public actionSheet: ActionSheetController) {
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

  // presentActionSheet() {
  //   let actionSheet = this.actionSheet.create({
  //     title: 'Emergency Call',
  //     buttons: [
  //       {
  //         text: 'Police',
  //         icon: 'ios-call-outline',
  //         handler: () => {
  //           this.callphone('100');
  //         }
  //       },
  //       {
  //         text: 'Ambulance',
  //         icon: 'ios-call-outline',
  //         handler: () => {
  //           this.callphone('102');
  //         }
  //       },
  //       {
  //         text: 'Fire Service',
  //         icon: 'ios-call-outline',
  //         handler: () => {
  //           this.callphone('101');
  //         }
  //       },
  //       {
  //         text: 'Domestic abuse and sexual violence',
  //         icon: 'ios-call-outline',
  //         handler: () => {
  //           this.callphone('181');
  //         }
  //       },
  //       {
  //         text: 'Suicide / Crisis line - 24-hours helpline',
  //         icon: 'ios-call-outline',
  //         handler: () => {
  //           this.callphone('04427546669');
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         icon: 'ios-close-circle-outline',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

}