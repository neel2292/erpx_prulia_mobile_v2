import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, AlertController, ToastController} from 'ionic-angular';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {Events} from "ionic-angular/util/events";

/**
 * Generated class for the MemberInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-member-info',
  templateUrl: 'member-info.html',
})
export class MemberInfoPage {
  member: any = {
    full_name: '',
    nric_number: '',
    gender: '',
    cell_number: '',
    email: ''
  };
  acknowledgement: boolean = false;
  mode: any = "New";

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider,
              public alertCtrl: AlertController, public toastCtrl: ToastController, private events: Events, public viewCtrl: ViewController) {
    this.member = Object.assign({}, navParams.get('value'));
    this.mode = navParams.get('mode');


    Object.keys(this.member).forEach(function (key) {
      if (this.member[key] === undefined) {
        this.member[key] = '';
      }
    }.bind(this));
  }

  saveMemberInfo() {
    let that = this;
    this.events.publish('loading:start', 'Saving...');
    this.memberProvider.post_member_profile(this.member, function (data) {
      let toast = that._createToast('Personal information was update successfully');
      that.memberProvider.get_member_profile(true)
        .then(data => {
            that.events.publish('loading:end');
            that.dismiss();
            toast.present();
          }, (error => {
            that._displayError(error);
          })
        )
    }, function (error) {
      that._displayError(error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  _displayAckError() {
    console.log("No acknowledgement");
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please kindly acknowledge the declaration by clicking the checkbox in the form',
      buttons: ['Dismiss']
    });
    this.events.publish('loading:end');
    alert.present();
  }

  _displayError(error) {
    console.log(error);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error in update',
      buttons: ['Dismiss']
    });
    this.events.publish('loading:end');
    alert.present();
  }

  _createToast(message) {
    return this.toastCtrl.create({
      message: message,
      duration: 10000,
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'bottom'
    });
  }
}
