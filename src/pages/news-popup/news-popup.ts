import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {PruliaNewsletterProvider} from "../../providers/prulia-newsletter/prulia-newsletter";
import {CommonProvider} from "../../providers/common/common";
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";

/**
 * Generated class for the NewsPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-popup',
  templateUrl: 'news-popup.html',
})
export class NewsPopupPage {
  list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public commonProvider: CommonProvider,
              public newsProvider: PruliaNewsletterProvider, public viewCtrl: ViewController, public memberProvider: PruliaMemberProvider) {}

  ionViewDidLoad() {
    this.memberProvider.get_member_profile().then(member => {
      console.log(member);
      this.newsProvider.get_newsletter_popup().then(list => {
        list = list.filter(news => {
                let filters = ['position', 'region', 'branch'],
                    ret = true;

                    filters.forEach(filter => {
                      if (ret && news[filter] && news[filter] !== member[filter]) { ret = false; }
                    });

                    return ret;
              });

        if (list.length) {
          list.forEach(news => {
            this.list.push(this.commonProvider.get_api_url(news['news_image']));
          })
        }
        else { this.dismiss(); }
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
