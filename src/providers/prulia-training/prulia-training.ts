import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common';

/*
  Generated class for the PruliaTrainingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruliaTrainingProvider {
  listings: any = [];

  constructor(public http: HttpClient, public common: CommonProvider) {
    console.log('Hello PruliaTrainingProvider Provider');
  }

  get_training_listing(bForceRefresh, queryWords: string, member_name){
    let that = this;
    return new Promise((resolve, reject) => {
      if(bForceRefresh || that.listings.length < 1){
        that._load_training_listing(member_name, function(){
          resolve(that.listings);
        }, function(){
          reject("Unable to retrieve the information");
        });
      } else {
        resolve(that.listings);
      }
    });
  }

  _load_training_listing(member_name: string, fnSuccess, fnError){
    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_trainings.doctype.prulia_training.prulia_training.get_training_list'), {
      withCredentials: true,
      params: { member_name: member_name }
    })
      .subscribe(res => {
        if(res['message'] instanceof Array){
          this.listings = res['message'];
        } else {
          this.listings = [];
        }
        for (let list of this.listings) {
          // console.log(entry); // 1, "string", false
          if(!list['training_image']){
            list['training_image'] = "../www/assets/imgs/Prulia-word-logo.png"
          } else {
            list['training_image'] = this.common.get_service_endpoint() + list['training_image']
          }
          list['start_date_time'] = new Date(list['start_date_time'].replace(' ', 'T')+ '+08:00')
          list['end_date_time'] = new Date(list['end_date_time'].replace(' ', 'T')+ '+08:00')
        }
        // if(this.events.profile_photo !== ""){
        //   this.events.profile_photo = this.common.get_service_endpoint() + this.events.profile_photo;
        // } else {
        //   this.events.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
        // }
        console.log(this.listings);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError();
      });
  }

  update_training_registration(data, fnSuccess, fnError){
    this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_trainings.doctype.prulia_training.prulia_training.update_training_trainee'), JSON.stringify(data), {withCredentials: true})
      .subscribe(res => {
        console.log(res['message']);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError(err);
      });
  }

  create_training_registration(data, fnSuccess, fnError){
    this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_trainings.doctype.prulia_training.prulia_training.add_attendance'), data, {withCredentials: true})
      .subscribe(res => {
        console.log(res['_server_message']);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError(err);
      });
  }

  withdraw_training_registration(data, fnSuccess, fnError){
    this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_trainings.doctype.prulia_training.prulia_training.del_attendance'), data, {withCredentials: true})
      .subscribe(res => {
        console.log(res['message']);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError(err);
      });
  }
}
