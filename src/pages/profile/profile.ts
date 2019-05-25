import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

import { MemberDetailPage } from "../member-detail/member-detail";
import { EventPrefPage } from "../event-pref/event-pref";
import { MemberInfoPage } from "../member-info/member-info";
import { UpdatePasswordPage } from "../update-password/update-password";

import { PruliaMemberProvider } from "../../providers/prulia-member/prulia-member";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	profileExpand: boolean = false;
	eventExpand: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider
		, public auth: AuthServiceProvider, public appEvent: Events) {
	}

	goToProfile(){
		this.navCtrl.push(MemberDetailPage, { value: this.memberProvider.member });
	}
	goToMemberInfo(){
		this.navCtrl.push(MemberInfoPage, { value: this.memberProvider.member, mode: "Profile" });
	}
	goToEventPerferences(){
		this.navCtrl.push(EventPrefPage, { value: this.memberProvider.member, mode: "Profile" });
	}
	goToUpdatePassword(){
		this.navCtrl.push(UpdatePasswordPage, { value: this.memberProvider.member });
	}
	logout(){
		this.auth.logout();
	}

	hideList(expandedAccordion){
		// switch (expandedAccordion) {
		// 	case "Profile":
				this.profileExpand = false;
				this.eventExpand = false;
			// 	break;

			// default:
			// 	// code...
			// 	break;
		// }(expandedAccordion)
	}


	ionViewDidLoad() {
	    console.log('ionViewDidLoad ProfilePage');
	    this.appEvent.publish('loading:start', 'Loading...');
	    this.memberProvider.get_member_profile(false)
				.then(data => {
					this.appEvent.publish('loading:end');
				},(error => {
					console.log(error)
				})
			)
	}

}
