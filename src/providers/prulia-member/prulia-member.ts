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
        //profile photo
        if (this.member.profile_photo !== undefined && this.member.profile_photo !== "") {
          if (this.member.profile_photo.indexOf(this.common.get_service_endpoint()) === -1) {
            this.member.profile_photo = this.common.get_service_endpoint() + '/' + this.member.profile_photo;
          }
        } else {
          this.member.profile_photo = "../www/assets/imgs/avatar_placeholder-1.png";
        }

        //smart partners
        ['pa_status', 'pi_status', 'maxis_status'].forEach(function (key) {
          if (this.member[key]) {
            this.member[key] = formatDate(this.member[key]);
          }
        }.bind(this));

        console.log(this.member);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError();
      });

    function formatDate(date) {
      if (typeof date === 'string') { date = new Date(date); }

      var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ],
        day = date.getDate(),
        monthIndex = date.getMonth(),
        year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
  }

  post_member_profile(data, fnSuccess, fnError) {
    console.log(data);
    this.http.post(
        this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.update_member_pref'), data, {withCredentials: true})
      .subscribe(res => {
        this.member = res['message'];
        if(this.member.profile_photo !== ""){
          if (this.member.profile_photo.indexOf(this.common.get_service_endpoint()) === -1) {
            this.member.profile_photo = this.common.get_service_endpoint() + '/' + this.member.profile_photo;
          }
        } else {
          this.member.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
        }
        console.log(this.member);
        fnSuccess(this.member);
      }, (err) => {
        console.log(err);
        fnError(err);
      });
  }

  post_member_picture(data, fnSuccess, fnError){
    var member = this.member;

    data.filename = member.name + '_' + data.filename;

    data = Object.assign(data, {
      from_form: 1,
      is_private: 0,
      cmd: 'uploadfile',
      doctype: 'PRULIA Member',
      docname: member.name,
    });

    this.http.post(this.common.get_api_url(''), urlEncode(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        withCredentials: true
      })
      .subscribe(res => {
        var msg = res['message'] || {};

        this.member.profile_photo = msg.file_url;
        this.post_member_profile(this.member, fnSuccess, fnError);
      }, (err) => {
        console.log(err);
        fnError(err);
      });

    function urlEncode(obj) {
      var str = [];

      for (var key in obj) {
           if (obj.hasOwnProperty(key)) {
                 str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
           }
      }

      return str.join("&");
    }
  }
}
