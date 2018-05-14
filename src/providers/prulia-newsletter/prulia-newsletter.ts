import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common';

/*
  Generated class for the PruliaNewsletterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruliaNewsletterProvider {

  newsletters: any = []

  constructor(public http: HttpClient, public common: CommonProvider) {
    console.log('Hello PruliaNewsletterProvider Provider');
  }

  get_newsletter_listing(bForceRefresh, queryWords: string, member_name){
    let that = this;
  	return new Promise((resolve, reject) => {
      if(bForceRefresh || that.newsletters.length < 1){
        that._load_newsletter_listing(member_name, function(){
          resolve(that.newsletters);
        }, function(){
          reject("Unable to retrieve the information");
        });
      } else {
        resolve(that.newsletters);
      }
    });
  }

  _load_newsletter_listing(member_name: string, fnSuccess, fnError){
    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_newsletter.prulia_newsletter.get_newsletter_list'), {
      withCredentials: true,
      params: { member_name: member_name }
    })
        .subscribe(res => {
          if(res['message'] instanceof Array){
            this.newsletters = res['message'];
          } else {
            this.newsletters = [];
          }
          for (let newsletter of this.newsletters) {
      		    if(!newsletter['news_image'] || newsletter['news_image'] === null){
      		    	newsletter['news_image'] = "../www/assets/imgs/Prulia-word-logo.png"
      		    } else {
                newsletter['news_image'] = this.common.get_service_endpoint() + newsletter['news_image']
              }

              newsletter['publish_date'] = new Date(newsletter['publish_date']+ 'T00:00:00+08:00')
      		}
          // if(this.events.profile_photo !== ""){
          //   this.events.profile_photo = this.common.get_service_endpoint() + this.events.profile_photo;
          // } else {
          //   this.events.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
          // }
          console.log(this.newsletters);
          fnSuccess();
        }, (err) => {
          console.log(err); 
          fnError();
        });
  }


}
