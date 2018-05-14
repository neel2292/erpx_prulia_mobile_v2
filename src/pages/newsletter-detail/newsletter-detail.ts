import { Component,Renderer, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PruliaNewsletterProvider } from "../../providers/prulia-newsletter/prulia-newsletter";
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the NewsletterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newsletter-detail',
  templateUrl: 'newsletter-detail.html',
})
export class NewsletterDetailPage {

  newsletterIter : any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsletterProvider: PruliaNewsletterProvider,
    public plt: Platform,public renderer: Renderer, private elRef:ElementRef, public appEvent: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsletterDetailPage');
    for(let i = 0; i < this.newsletterProvider.newsletters.length; i++){
      if(this.newsletterProvider.newsletters[i].name === this.navParams.get('newsletter_name')){
        this.newsletterIter = i;
        break;
      }
      
      console.log(this.newsletterProvider.newsletters[this.newsletterIter]);
    }
  }

  ionViewDidEnter(){
    this.appEvent.publish('loading:start', 'loading...');
    // if(this.plt.is('ios')){
      let links = this.elRef.nativeElement.querySelectorAll('a');
        links.forEach(function(element) {
          this.renderer.listen(element, 'tap', (evt) => {
            // console.log();
            // evt.stopPropagation();
            window.open(element.getAttribute('href'),'_system');
            return false;
          })
        }, this);
    // }
    this.appEvent.publish('loading:end');
  }

}
