import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonProvider } from '../common/common';

/*
  Generated class for the PruliaHomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruliaHomeProvider {
	home_entries: any = []

	constructor(public http: HttpClient, public common: CommonProvider) {
		console.log('Hello PruliaHomeProvider Provider');
	}

	get_home_listing(bForceRefresh){
	    let that = this;
	  	return new Promise((resolve, reject) => {
	      if(bForceRefresh || that.home_entries.length < 1){
	        that._load_home_listing(function(){
	          resolve(that.home_entries);
	        }, function(){
	          reject("Unable to retrieve the information");
	        });
	      } else {
	        resolve(that.home_entries);
	      }
	    });
	  }

	  _load_home_listing(fnSuccess, fnError){
	    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_home.prulia_home.get_home'), {withCredentials: true})
	        .subscribe(res => {
	          if(res['message']['content'] instanceof Array){
	            this.home_entries = res['message']['content'];
	          } else {
	            this.home_entries = [];
	          }
	          for (let home of this.home_entries) {
	      		    if(!home['image'] || home['image'] === null){
	      		    	home['image'] = "../www/assets/imgs/Prulia-word-logo.png"
	      		    } else if( !home['image'].startsWith("http")) {
	                	home['image'] = this.common.get_service_endpoint() + home['image']
	              }
	      		}
	          console.log(this.home_entries);
	          fnSuccess();
	        }, (err) => {
	          console.log(err); 
	          fnError();
	        });
	  }

}
