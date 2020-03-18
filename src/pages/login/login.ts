import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {TabsPage} from '../tabs/tabs';
import {Events} from 'ionic-angular/util/events';
import {CommonProvider} from '../../providers/common/common';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("username") username;
  @ViewChild("password") password;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private iab: InAppBrowser, private auth: AuthServiceProvider, public alertCtrl: AlertController,
              private toastCtrl: ToastController, private events: Events, public common: CommonProvider) {
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

  login() {
    this.events.publish('loading:start', 'Authenticating...');

    if (!this.username.value || this.username.value.length !== 7) {
      let alert = this.alertCtrl.create({
        title: 'Invalid agent ID',
        message: 'Agent ID must be of 7 character',
        buttons: ['OK']
      });
      this.events.publish('loading:end');
      alert.present();
      return;
    }

    if (!this.password.value) {
      let alert = this.alertCtrl.create({
        title: 'Invalid password',
        message: 'The password you entered is invalid',
        buttons: ['OK']
      });
      this.events.publish('loading:end');
      alert.present();
      return;
    }

    this.auth.login(this.username.value, this.password.value)
      .then(data => {
          this.navCtrl.push(TabsPage);
          this.events.publish('loading:end');
          this.events.publish('register:push');
        }, (error => {
          console.log(error)
          let alert = this.alertCtrl.create({
            title: 'Login Unsuccessful',
            message: 'The agent ID or password you entered is incorrect',
            buttons: ['OK']
          });
          this.events.publish('loading:end');
          alert.present();
        })
      )
  }

  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter your Agent ID and NRIC Number so we can send you temporary password.",
      inputs: [
        {
          name: 'prulia_id',
          placeholder: 'Agent ID (eg: 1234567)',
          type: 'string'
        }, {
          name: 'nric_id',
          placeholder: 'NRIC Number (eg: xxxxxx-xx-xxxx)',
          type: 'integer'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            this.events.publish('loading:start', 'Validating...');

            if (!data.prulia_id || data.prulia_id.length !== 7) {
              let alert = this.alertCtrl.create({
                title: 'Invalid agent ID',
                message: 'Agent ID must be of 7 character',
                buttons: ['OK']
              });
              this.events.publish('loading:end');
              alert.present();
              return;
            }

            if (!/\d{6}-\d{2}-\d{4}/.test(data.nric_id)) {
              let alert = this.alertCtrl.create({
                title: 'Invalid NRIC number',
                message: 'NRIC number must of the format xxxxxx-xx-xxxx',
                buttons: ['OK']
              });
              this.events.publish('loading:end');
              alert.present();
              return;
            }

            this.auth.forget_password(data.prulia_id, data.nric_id)
              .then(data => {
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
                    this.events.publish('loading:end');
                    alert.present();
                  } else if (data['message'].indexOf('temporary login credential') < 0) {
                    let alert = this.alertCtrl.create({
                      title: "Info",
                      message: data['message'],
                      buttons: ['OK']
                    });
                    this.events.publish('loading:end');
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
                    this.events.publish('loading:end');
                    toast.present();
                  }

                }, (error => {
                  console.log(error)
                  // let error_message = "";
                  // if(error.error._server_messages !== undefined){
                  // 	if(JSON.parse(error.error._server_messages)!==undefined){
                  // 		let oError = JSON.parse(error.error._server_messages);
                  // 		console.log(oError);
                  // 		if(oError!=undefined){
                  // 			error_message = "";
                  // 		}
                  // 		oError.forEach( (element) => {
                  // 			let oElement = JSON.parse(element);
                  // 		    error_message += oElement.message;
                  // 		});
                  // 	}
                  // }
                  // if(error_message == ""){
                  // 	error_message = "Unable to send out email";
                  // }

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
                  //    		} else {
                  //    			let errorAlert = this.alertCtrl.create({
                  //   title: 'Error',
                  //   message: error_message,
                  //   buttons: ['OK']
                  // });
                  // this.events.publish('loading:end');
                  // errorAlert.present();
                  //    		}
                })
              )

          }
        }
      ]
    });
    //  let forgot = this.alertCtrl.create({
    //    title: 'Forgot Password?',
    //    message: "Enter you email address so we can send you a link to reset your password.",
    //    inputs: [
    //      {
    //        name: 'email',
    //        placeholder: 'Email',
    //        type: 'email'
    //      },
    //    ],
    //    buttons: [
    //      {
    //        text: 'Cancel',
    //        handler: data => {
    //          console.log('Cancel clicked');
    //        }
    //      },
    //      {
    //        text: 'Send',
    //        handler: data => {
    //          console.log('Send clicked');
    //          this.events.publish('loading:start', 'Validating...');
    //          this.auth.reset_password(data.email)
    //          	.then(data => {
    //          		if(data['message']==='not found'){
    //          			let alert = this.alertCtrl.create({
    // 					      title: "Error",
    // 					      message:"Unable to find user with the provided email",
    // 					      buttons: ['OK']
    // 					    });
    // 		    this.events.publish('loading:end');
    // 		    alert.present();
    //          		} else {
    //          			let toast = this.toastCtrl.create({
    // 		              message: data['message'] ,
    // 		              duration: 3000,
    // 		              position: 'bottom',
    // 		              cssClass: 'dark-trans',
    // 		              closeButtonText: 'OK',
    // 		              showCloseButton: true
    // 		            });
    //          			this.events.publish('loading:end');
    //          			toast.present();
    //          		}

    // 	},(error => {
    // 		console.log(error)
    // 		let alert = this.alertCtrl.create({
    // 	      title: 'Unable to send out email',
    // 	      message: 'Error Occured',
    // 	      buttons: ['OK']
    // 	    });
    // 	    this.events.publish('loading:end');
    // 	    alert.present();
    // 	})
    // )

    //        }
    //      }
    //    ]
    //  });
    forgot.present();
  }

  firstLogin() {
    let forgot = this.alertCtrl.create({
      title: 'First Time Login',
      message: "Enter your details so we can send you a link to reset your password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            this.events.publish('loading:start', 'Validating...');
            this.auth.reset_password(data.email)
              .then(data => {
                  if (data['message'] === 'not found') {
                    let alert = this.alertCtrl.create({
                      title: "Warning",
                      message: "Unable to find user with the provided email",
                      buttons: ['OK']
                    });
                    this.events.publish('loading:end');
                    alert.present();
                  } else {
                    let toast = this.toastCtrl.create({
                      message: data['message'],
                      duration: 15000,
                      position: 'bottom',
                      cssClass: 'dark-trans',
                      closeButtonText: 'OK',
                      showCloseButton: true
                    });
                    this.events.publish('loading:end');
                    toast.present();
                  }

                }, (error => {
                  console.log(error)
                  let alert = this.alertCtrl.create({
                    title: 'Unable to send out email',
                    message: 'Error Occured',
                    buttons: ['OK']
                  });
                  this.events.publish('loading:end');
                  alert.present();
                })
              )

          }
        }
      ]
    });
    forgot.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
