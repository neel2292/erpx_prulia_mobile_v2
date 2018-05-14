import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-password',
  templateUrl: 'update-password.html',
})
export class UpdatePasswordPage {
	@ViewChild("old_password") old_password;
	@ViewChild("new_password") new_password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
  	public authProvider: AuthServiceProvider, public alertCtrl: AlertController, public toastCtrl: ToastController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePasswordPage');
  }

  updatePassword(){
  	let that = this;
  	this.events.publish('loading:start', 'Updating...');
  	this.authProvider.update_password(this.old_password.value, this.new_password.value, function(){
  		let toast = that.toastCtrl.create({
              message: 'Password was update successfully',
              duration: 10000,
              showCloseButton: true,
              closeButtonText: 'OK',
              position: 'bottom'
            });
            that.dismiss();
            that.events.publish('loading:end');
            toast.present();

  	}, function(err){
  		console.log(err);
  		let errMsg = "";
  		if(err['status']==401){
  			errMsg = "Please Provide a valid password"
  		} else {
  			errMsg = 'Unable to update the password, please contact Administrator'
  		}
  		let alert = that.alertCtrl.create({
	      title: 'Update Password Unsuccessful',
	      message: errMsg,
	      buttons: ['OK']
	    });
	    that.events.publish('loading:end');
	    alert.present();
  	})

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
