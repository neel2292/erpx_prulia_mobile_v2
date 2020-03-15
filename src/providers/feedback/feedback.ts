import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CommonProvider} from '../common/common';
import {PruliaMemberProvider} from "../prulia-member/prulia-member";

/*
  Generated class for the FeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackProvider {
  categories = [];

  constructor(public http: HttpClient, public common: CommonProvider, public memberProvider: PruliaMemberProvider) {
    console.log('Hello FeedbackProvider Provider');
  }

  get_categories() {
    let that = this;
    return new Promise((resolve, reject) => {
      if (that.categories.length < 1) {
        that._load_categories(function () {
          resolve(that.categories);
        }, function () {
          reject("Unable to retrieve the information");
        });
      } else {
        resolve(that.categories);
      }
    });
  }

  submit_feedback(category, remark) {
    var that = this;

    return new Promise((resolve) => {
      this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_feedback.prulia_feedback.submit_feedback'), {
        category: category,
        remark: remark,
        member: that.memberProvider.member.name,
        member_name: that.memberProvider.member.full_name
      }, {withCredentials: true})
      .subscribe(res => {
        this.categories = res['message'];
        resolve(res)
      }, (err) => {
        console.log(err);
        resolve(err)
      });
    });
  }

  _load_categories(fnSuccess, fnError) {
    this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_feedback_category.prulia_feedback_category.get_categories'))
      .subscribe(res => {
        this.categories = res['message'];
        fnSuccess();
      }, (err) => {
        console.log(err);
        fnError();
      });
  }

}
