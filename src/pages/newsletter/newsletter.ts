import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PruliaMemberProvider} from "../../providers/prulia-member/prulia-member";
import {PruliaNewsletterProvider} from "../../providers/prulia-newsletter/prulia-newsletter"
import {Events} from 'ionic-angular/util/events';
import {NewsletterDetailPage} from "../newsletter-detail/newsletter-detail"

/**
 * Generated class for the NewsletterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newsletter',
  templateUrl: 'newsletter.html',
})
export class NewsletterPage {

  queryText: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider,
              public newsletterProvider: PruliaNewsletterProvider,
              public appEvent: Events) {
    this.appEvent.subscribe('newsletter:update', fnSuccess => this._updateNewsletter(true, true, fnSuccess));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsletterPage');
    this._updateNewsletter(false, false)
  }

  doRefresh(refresher) {
    this._updateNewsletter(true, false, (data => {
      refresher.complete()
    }), (data => {
      refresher.complete()
    }))
  }

  eventTapped(newsletter) {
    if (newsletter["type"] === "Content") {
      this.navCtrl.push(NewsletterDetailPage, {newsletter_name: newsletter['name']});
    } else {
      window.open(newsletter["link"], '_blank');
    }
  }

  _updateNewsletter(bRefresh, bFromModel, fnSuccess?, fnError?) {
    if (!bFromModel) {
      this.appEvent.publish('loading:start', 'Loading...');
    }

    this.newsletterProvider.get_newsletter_listing(true, this.queryText, this.memberProvider.member.name)
      .then(data => {
          if (fnSuccess) {
            fnSuccess();
          }
          if (!bFromModel) {
            this.appEvent.publish('loading:end');
          }

        }, (error => {
          if (fnError) {
            fnError();
          }
          console.log(error)
          if (!bFromModel) {
            this.appEvent.publish('loading:end');
          }
        })
      )
  }
}
