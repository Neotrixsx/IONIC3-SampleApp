import { Network } from '@ionic-native/network';
import { CommonProvider } from './../../providers/common/common';
import { JsonProvider } from './../../providers/json/json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {
  newsData;
  parameter;
  para;
  postlink;
  postimage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jsonProvider: JsonProvider, public common: CommonProvider, public network: Network) {
    this.parameter = navParams.get('param');
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogDetailPage');
  }

  getdata() {
    this.common.presentLoading();
    this.para = this.parameter + 1;
    this.jsonProvider.getJsonBlog()
      .map(data => data.data)
      .subscribe(
        data => {
          this.newsData = data.filter(item => item.postid === this.para + "");
          this.postlink= this.newsData[0].postlink;
          this.postimage= this.newsData[0].postimage;
          console.log(this.postlink);
          
          this.common.closeLoading();
          console.log("Success : " + this.newsData);
        },
        err => {
          this.common.closeLoading();
          console.error("Error : " + err);
        }//,
        // () => {
        //   this.common.closeLoading();
        //   console.log('getData completed');
        // }
      );
  }

  openPage(url) {
    console.log(url);
    
    if (this.network.type !== 'none') {
      this.common.openpage(url);
    } else {
      this.common.presentToast("Please check your network connection!!!", "top")
    }
  }
}
