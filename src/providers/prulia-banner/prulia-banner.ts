import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommonProvider} from '../common/common';

/*
  Generated class for the PruliaBannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruliaBannerProvider {
  banners: any = []

  constructor(public http: HttpClient, public common: CommonProvider) {
    console.log('Hello PruliaBannerProvider Provider');
  }

  get_banner(bForceRefresh) {
    let that = this;
    return new Promise((resolve, reject) => {
      if (bForceRefresh || that.banners.length < 1) {
        that._load_prulia_banner(function () {
          resolve(that.banners);
        }, function () {
          reject("Unable to retrieve the information");
        });
      } else {
        resolve(that.banners);
      }
    });
  }

  _load_prulia_banner(fnSuccess, fnError) {
    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_banner.prulia_banner.get_banner'), {withCredentials: true})
      .subscribe(res => {
        if (res['message'] instanceof Array) {
          this.banners = res['message'];
        } else {
          this.banners = [];
        }
        for (let banner of this.banners) {
          if (!banner['image'] || banner['image'] === null) {
            banner['image'] = "../www/assets/imgs/Prulia-word-logo.png"
          } else {
            banner['image'] = this.common.get_service_endpoint() + banner['image']
          }
        }


        console.log(this.banners);
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError();
      });
  }

}
