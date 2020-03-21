import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {PruliaNewsletterProvider} from "../../providers/prulia-newsletter/prulia-newsletter";
import {CommonProvider} from "../../providers/common/common";

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
              public newsProvider: PruliaNewsletterProvider, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    this.newsProvider.get_newsletter_popup().then(list => {
      list.forEach(news => {
        this.list.push(this.commonProvider.get_api_url(news['news_image']));
      })
      // (res['message'] || []).forEach(list => {
      //   console.log(list);
      //   list.forEach(news => {
      //     this.list.push(this.commonProvider.get_api_url(news.news_image));
      //   });
      // });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
