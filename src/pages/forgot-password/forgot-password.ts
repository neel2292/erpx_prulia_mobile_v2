import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Events} from 'ionic-angular/util/events';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {CommonProvider} from '../../providers/common/common';
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  @ViewChild("username") username;
  @ViewChild("nric") nric;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController,
              private iab: InAppBrowser, private events: Events, private toastCtrl: ToastController,
              public auth: AuthServiceProvider, public common: CommonProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    let prulia_id = this.username.value,
      nric_id = this.nric.value;

    if (!prulia_id || prulia_id.length !== 7) {
      let alert = this.alertCtrl.create({
        title: 'Invalid Prudential ID',
        message: 'Prudential ID must be of 7 character',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    if (!/\d{6}-\d{2}-\d{4}/.test(nric_id)) {
      let alert = this.alertCtrl.create({
        title: 'Invalid NRIC number',
        message: 'NRIC number must of the format xxxxxx-xx-xxxx',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.events.publish('loading:start', 'Validating...');

    this.auth.forget_password(this.username.value, this.nric.value)
      .then(data => {
          this.events.publish('loading:end');

          if (data['message'].indexOf('not found') >= 0) {
            let alert = this.alertCtrl.create({
              title: "Info",
              message: "Noticed that you are new in PRULIA, please click OK to proceed with membership registration",
              buttons: [{
                text: 'OK',
                handler: () => {
                  console.log('No User Found OK clicked');
                  alert.dismiss();
                  this.openRegistrationPage();
                }
              }, {
                text: 'Cancel',
                handler: () => {
                  console.log('No User Found Cancel clicked');
                  // alert.dismiss();
                }
              }]
            });
            alert.present();
          } else if (data['message'].indexOf('temporary login credential') < 0) {
            let alert = this.alertCtrl.create({
              title: "Info",
              message: data['message'],
              buttons: ['OK']
            });
            alert.present();
          } else {
            let toast = this.toastCtrl.create({
              message: data['message'],
              duration: 10000,
              position: 'bottom',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
          this.dismiss();
        }, (error => {
          console.log(error);

          // if(error_message.indexOf('not found') >= 0){
          let notFoundAlert = this.alertCtrl.create({
            title: "Info",
            message: "Noticed that you are new in PRULIA, please click OK to proceed with membership registration",
            buttons: [{
              text: 'OK',
              handler: () => {
                console.log('No User Found OK clicked');
                notFoundAlert.dismiss();
                this.openRegistrationPage();
              }
            }, {
              text: 'Cancel',
              handler: () => {
                console.log('No User Found Cancel clicked');
                // notFoundAlert.dismiss();
              }
            }]
          });
          this.events.publish('loading:end');
          notFoundAlert.present();
          this.dismiss();
        })
      )
  }

  openRegistrationPage() {
    const browser = this.iab.create(this.common.get_api_url('/member-registration'), '_blank',
      'location=no');

    browser.on("loadstop")
      .subscribe(
        (evt) => {
          if (evt.url.match("registration-complete")) {
            browser.close();
          }
        },
        err => {
          console.log("InAppBrowser loadstop Event Error: " + err);
        });
  }
}
