import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://appadmin.samroid.com/apis/fattofit/';

@Injectable()
export class RestfulServicesProvider {

  constructor(public http: Http) {
    console.log('Hello RestfulServicesProvider Provider');
  }
  postData(data, semiurl) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + semiurl, JSON.stringify(data), { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}

  // import { RestfulServicesProvider } from './../../providers/restful-services/restful-services';

  // storage.get('notid').then((val) => {
    //   console.log('Device Notification id: ', notid);
    // });

  // public userPostData = {
    //   "user_id": "",
    //   "token": "",
    //   "feed": "",
    //   "feed_id": ""
    // };


  // this.userPostData.user_id = this.userDetails.user_id;
  // this.userPostData.token = this.userDetails.token;


  // getFeed() {
      //   this.common.presentLoading();
      //   this.common.presentToast("hello");
      //   this
      //     .restfulservices
      //     .postData(this.userPostData, "feed")
      //     .then((result) => {
      //       this.resposeData = result;
      //       if (this.resposeData.feedData) {
      //         this.common.closeLoading();
      //         this.dataSet = this.resposeData.feedData;
      //         console.log(this.dataSet);

      //       } else {
      //         console.log("No access");
      //       }

      //     }, (err) => {
      //       //Connection failed message
      //     });
      // }
