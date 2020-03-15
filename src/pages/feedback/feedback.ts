import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {FeedbackProvider} from "../../providers/feedback/feedback";
import {Events} from 'ionic-angular/util/events';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  categories: any = [];
  category: string;
  remark: string;
  errors: string[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public appEvent: Events,
              public feedbackProvider: FeedbackProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');

    this.feedbackProvider.get_categories().then(cats => {
      this.categories = cats;
    });
  }

  submitFeedback() {
    this.errors = [];

    if (!this.category) {
      this.errors.push('Category is required');
    }

    if (!this.remark) {
      this.errors.push('Remark is required');
    }

    if (this.errors.length) {
      this.alertCtrl.create({
        title: 'Error',
        message: '<ul>' + this.errors.map(err => {
            return '<li>' + err + '</li>';
          }).join('') + '</ul>',
        buttons: [{
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary'
        }]
      }).present();
    }
    else {
      this.appEvent.publish('loading:start', 'Submitting...');
      this.feedbackProvider.submit_feedback(this.category, this.remark).then((res) => {
        let msg;

        if (res && res['message']) {
          msg = "Your feedback has been submitted";
        }
        else {
          msg = "Something's wrong. Please try again";
        }

        this.toastCtrl.create({
          message: msg,
          duration: 3000
        }).present();

        this.appEvent.publish('loading:end');
      });
    }
  }
}
