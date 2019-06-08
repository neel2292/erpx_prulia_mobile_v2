import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Events} from 'ionic-angular/util/events';
import {ImagePicker} from '@ionic-native/image-picker';
import {Base64} from "@ionic-native/base64";

import {MemberDetailPage} from "../member-detail/member-detail";
import {EventPrefPage} from "../event-pref/event-pref";
import {MemberInfoPage} from "../member-info/member-info";
import {UpdatePasswordPage} from "../update-password/update-password";

import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileExpand: boolean = false;
  eventExpand: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider
    , public auth: AuthServiceProvider, public appEvent: Events, public alertCtrl: AlertController,
              public imagePicker: ImagePicker, public base64: Base64) {
  }

  goToProfile() {
    this.navCtrl.push(MemberDetailPage, {value: this.memberProvider.member});
  }

  goToMemberInfo() {
    this.navCtrl.push(MemberInfoPage, {value: this.memberProvider.member, mode: "Profile"});
  }

  goToEventPerferences() {
    this.navCtrl.push(EventPrefPage, {value: this.memberProvider.member, mode: "Profile"});
  }

  goToUpdatePassword() {
    this.navCtrl.push(UpdatePasswordPage, {value: this.memberProvider.member});
  }

  logout() {
    this.auth.logout();
  }

  hideList(expandedAccordion) {
    // switch (expandedAccordion) {
    // 	case "Profile":
    this.profileExpand = false;
    this.eventExpand = false;
    // 	break;

    // default:
    // 	// code...
    // 	break;
    // }(expandedAccordion)
  }

  selectPicture() {
    let options = { maximumImagesCount: 1 };

    this.appEvent.publish('loading:start', 'Loading...');
    this.imagePicker.getPictures(options).then((results) => {
      var result = results[0];

      if (result) {
        this.base64.encodeFile(result).then((b64: string) => {
          b64 = b64.split('base64,').pop();

          this.uploadPicture(result, b64);
        }, (err) => {
          this._displayError(err);
        })
      }
      else {
        this.appEvent.publish('loading:end');
      }
    }, (err) => {
      this._displayError(err);
    });
  }

  uploadPicture(path, b64) {
    if (getSize(b64) > 2000) { //file size can't exceed 2MB
      this.appEvent.publish('loading:end');

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'File limit size is 2MB',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else {
      this.memberProvider.post_member_picture({
        filename: path.split('/').pop(),
        filedata: b64
      }, (data) => {
        console.log(data);
        this.appEvent.publish('loading:end');
      }, (err) => {
        this._displayError(err);
      });
    }

    //returns in kB
    function getSize(base64) {
      return (4 * Math.ceil(base64.length / 3)) / 1000;
    }
  }

  _displayError(error) {
    console.log(error);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error in update',
      buttons: ['Dismiss']
    });
    this.appEvent.publish('loading:end');
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.appEvent.publish('loading:start', 'Loading...');
    this.memberProvider.get_member_profile(false)
      .then(data => {
          this.appEvent.publish('loading:end');
        }, (error => {
          console.log(error)
        })
      )
  }
}
