import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PruliaBannerProvider } from '../../providers/prulia-banner/prulia-banner';
import { Events } from 'ionic-angular/util/events';
import { PartnerDetailPage } from "../partner-detail/partner-detail"

/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-partner',
  templateUrl: 'partner.html',
})
export class PartnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bannerProvider: PruliaBannerProvider, public appEvent: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerPage');
    this._updatePartner(false, false);
  }

	doRefresh(refresher){
		this._updatePartner(true, false, (data=>{refresher.complete()}), (data=>{refresher.complete()}))
	}

	eventTapped(partner) {
		if(partner["type"] === "Content"){
	      this.navCtrl.push(PartnerDetailPage, { partner_name: partner['name'] });
	    } else{
	      window.open(partner["link"],'_blank');
	    }
	}

	_updatePartner(bRefresh, bFromModel, fnSuccess?, fnError?) {
		if(!bFromModel){
			this.appEvent.publish('loading:start', 'Loading...');
		}
	    
		this.bannerProvider.get_banner(bRefresh)
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
	          console.log(error)
	          if(!bFromModel){
	            this.appEvent.publish('loading:end');
	          }
	        })
	      )
	  }

}
