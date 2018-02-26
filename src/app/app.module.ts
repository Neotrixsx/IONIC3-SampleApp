
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { DeviceAccounts } from '@ionic-native/device-accounts';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { MyApp } from './app.component';

import { DirectivesModule } from './../directives/directives.module';

import { JsonProvider } from '../providers/json/json';
import { CommonProvider } from '../providers/common/common';
import { RestfulServicesProvider } from '../providers/restful-services/restful-services';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    ThemeableBrowser,
    SpinnerDialog,
    DeviceAccounts,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CommonProvider,
    JsonProvider,
    RestfulServicesProvider
  ]
})
export class AppModule { }
