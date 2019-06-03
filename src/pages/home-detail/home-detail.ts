import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PruliaHomeProvider} from '../../providers/prulia-home/prulia-home';

/**
 * Generated class for the HomeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html',
})
export class HomeDetailPage {
  homeEntriesIter: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public homeProvider: PruliaHomeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailPage');

    for (let i = 0; i < this.homeProvider.home_entries.length; i++) {
      if (this.homeProvider.home_entries[i].name === this.navParams.get('entry_name')) {
        this.homeEntriesIter = i;
        break;
      }
      console.log(this.homeProvider.home_entries[this.homeEntriesIter]);
    }
  }

}
