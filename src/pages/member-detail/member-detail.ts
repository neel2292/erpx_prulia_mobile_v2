import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";

/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html',
})
export class MemberDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberDetailPage');
  }

}
