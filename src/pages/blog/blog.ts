import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { JsonProvider } from './../../providers/json/json';
import { CommonProvider } from './../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  newsData;
  defaultImage : "assets/img/no_image.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams, public common: CommonProvider, public jsonProvider: JsonProvider) {
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }
  getdata() {
    this.common.presentLoading();
    this.jsonProvider.getJsonBlog().subscribe(
      result => {
        this.newsData = result.data;
        this.common.closeLoading();
        console.log("Success : " + this.newsData);
      },
      err => {
        this.common.closeLoading();
        console.error("Error : " + err);
      },
      () => {
        this.common.closeLoading();
        console.log('getData completed');
      }
    );
  }

  itemSelected(selected) {
    this.navCtrl.push("BlogDetailPage", {
      param: selected
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
