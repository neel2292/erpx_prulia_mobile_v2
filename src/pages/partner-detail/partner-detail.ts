import { Component,Renderer, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PruliaBannerProvider } from '../../providers/prulia-banner/prulia-banner';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the PartnerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-partner-detail',
  templateUrl: 'partner-detail.html',
})
export class PartnerDetailPage {
	bannerIter : any = 0;
	constructor(public navCtrl: NavController, public navParams: NavParams, public bannerProvider: PruliaBannerProvider,public renderer: Renderer, 
		public plt: Platform, private elRef:ElementRef,public appEvent: Events) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PartnerDetailPage');
		for(let i = 0; i < this.bannerProvider.banners.length; i++){
			debugger;
			if(this.bannerProvider.banners[i].name === this.navParams.get('partner_name')){
				this.bannerIter = i;
				break;
			}
			console.log(this.bannerProvider.banners[this.bannerIter]);
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
