import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommonProvider} from '../common/common';

/*
  Generated class for the PruliaMemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruliaMemberProvider {
  member: {
    prudential_id: string,
    name: string,
    full_name: string,
    branch: string,
    meal_option: string,
    nirc_number: string,
    user_id: string,
    cell_number: string,
    profile_photo: string,
    region: string,
    shirt_size: string,
  };

  constructor(public http: HttpClient, public common: CommonProvider) {
    console.log('Hello PruliaMemberProvider Provider');
  }


  get_member_profile(bForceRefresh) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (bForceRefresh || that.member === undefined) {
        that._load_member_profile(function () {
          resolve(that.member);
        }, function () {
          reject("Unable to retrieve the information");
        });
      } else {
        resolve(that.member);
      }
    });
  }

  _load_member_profile(fnSuccess, fnError) {
    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.mobile_member_login'), {withCredentials: true})
      .subscribe(res => {
        this.member = res['message'];
        if (this.member.profile_photo !== undefined && this.member.profile_photo !== "") {
          this.member.profile_photo = this.common.get_service_endpoint() + this.member.profile_photo;
        } else {
          this.member.profile_photo = "../www/assets/imgs/avatar_placeholder-1.png";
        }
        console.log(this.member);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError();
      });
  }

  post_member_profile(data, fnSuccess, fnError) {
    this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.update_member_pref'), JSON.stringify(data), {withCredentials: true})
      .subscribe(res => {
        this.member = res['message'];
        // if(this.member.profile_photo !== ""){
        //   this.member.profile_photo = this.common.get_service_endpoint() + this.member.profile_photo;
        // } else {
        //   this.member.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
        // }
        console.log(this.member);
        fnSuccess(this.member);
      }, (err) => {
        console.log(err);
        fnError(err);
      });
  }

}
