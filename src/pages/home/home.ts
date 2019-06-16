import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {PruliaHomeProvider} from "../../providers/prulia-home/prulia-home";
import {Events} from 'ionic-angular/util/events';
import {HomeDetailPage} from "../home-detail/home-detail"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public memberProvider: PruliaMemberProvider, public homeProvider: PruliaHomeProvider, public appEvent: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.appEvent.publish('loading:start', 'Loading...');

    this.memberProvider.get_member_profile(true)
      .then((data: any) => {
          let cur_date = new Date().getTime(),
            modified_date,
            alert;

          //set a yearly reminder for updating profile
          if (data) {
            modified_date = new Date(data.modified).getTime();
            if (((cur_date - modified_date) / (1000 * 60 * 60 * 24)) > 365) {
              alert = this.alertCtrl.create({
                title: 'Yearly reminder',
                message: "Reminder : Kindly update your personal profile if you have not done so",
                buttons: ['OK']
              });

              alert.present();
            }
          }

        }, (error => {
          console.log(error)
        })
      );
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
