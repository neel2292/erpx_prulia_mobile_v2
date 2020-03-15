import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {PruliaTrainingProvider} from "../../providers/prulia-training/prulia-training";
import {TrainingDetailPage} from "../training-detail/training-detail";

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {

  queryText : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider,
              public trainingProvider: PruliaTrainingProvider,
              public appEvent: Events) {
    this.appEvent.subscribe('event:update',  fnSuccess => this._updateSchedule(true, true, fnSuccess));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
    this._updateSchedule(false, false)
  }

  doRefresh(refresher) {
    this._updateSchedule(true, false, (data=>{refresher.complete()}), (data=>{refresher.complete()}))
  }

  trainingTapped(training_name) {
    this.navCtrl.push(TrainingDetailPage, { training_name: training_name });
  }

  _updateSchedule(bRefresh, bFromModel, fnSuccess?, fnError?) {
    if(!bFromModel){
      this.appEvent.publish('loading:start', 'Loading...');
    }

    this.trainingProvider.get_training_listing(true, this.queryText, this.memberProvider.member.name)
      .then(data => {
          if(fnSuccess){
            fnSuccess();
          }
          if(!bFromModel){
            this.appEvent.publish('loading:end');
          }

        },(error => {
          if(fnError){
            fnError();
          }
          console.log(error);
          if(!bFromModel){
            this.appEvent.publish('loading:end');
          }
        })
      )
  }
}
