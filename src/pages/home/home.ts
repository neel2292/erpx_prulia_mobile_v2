import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {PruliaHomeProvider} from "../../providers/prulia-home/prulia-home";
import {Events} from 'ionic-angular/util/events';
import {HomeDetailPage} from "../home-detail/home-detail"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              public memberProvider: PruliaMemberProvider, public homeProvider: PruliaHomeProvider, public appEvent: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.appEvent.publish('loading:start', 'Loading...');

    this.memberProvider.get_member_profile(true)
      .then(data => {
        }, (error => {
          console.log(error)
        })
      )
    this.homeProvider.get_home_listing(true)
      .then(data => {
          this.appEvent.publish('loading:end');
        }, (error => {
          console.log(error)
        })
      )
  }

  eventTapped(home_entry) {

    if (home_entry["type"] === "Content") {
      this.navCtrl.push(HomeDetailPage, {entry_name: home_entry["name"]});
    } else {
      window.open(home_entry["link"], '_blank');
    }
    //
  }

}
