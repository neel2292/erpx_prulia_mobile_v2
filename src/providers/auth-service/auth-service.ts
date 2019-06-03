import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommonProvider} from '../common/common';
import {NavigationProvider} from "../../providers/navigation/navigation";
import {ToastController} from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient, public common: CommonProvider,
              private navigation: NavigationProvider, private toastCtrl: ToastController) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(username, password) {
    let credentials = {usr: username, pwd: password, device: "mobile"};

    return new Promise((resolve, reject) => {
      this.http.post(this.common.get_api_url('/api/method/login'), credentials, {
        observe: 'response',
        withCredentials: true
      })
        .subscribe(res => {
          debugger;
          // if(document.cookie !== ""){
          localStorage.user = username;
          let cookie = this.common.getCookies(document.cookie);
          localStorage.session_id = cookie["sid"];
          resolve(res.body);
          // } else {
          //   this.login(username, password).then(data => {
          //     resolve(data);
          //   },(error => {
          //     reject(error);
          //   })
          // }
        }, (err) => {
          reject(err);
        });
    });
  }

  logout() {
    localStorage.clear();
    this.navigation.userLogout();
    const toast = this.toastCtrl.create({
      message: 'Logout successfully',
      position: 'bottom',
      duration: 10000,
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

  if_session_valid() {
    return new Promise((resolve, reject) => {
      this.http.get(this.common.get_api_url('/api/method/frappe.auth.get_logged_user'), {
        observe: 'response',
        withCredentials: true
      })
        .subscribe(res => {
          resolve(res.body);
        }, (err) => {
          reject(err)
        });
    });
  }

  reset_password(email) {
    let data = {user: email};
    return new Promise((resolve, reject) => {
      this.http.post(this.common.get_api_url('/api/method/frappe.core.doctype.user.user.reset_password'), data, {
        observe: 'response',
        withCredentials: true
      })
        .subscribe(res => {
          resolve(res.body);
        }, (err) => {
          reject(err);
        });
    });
  }

  forget_password(prulia_id, nric_number) {
    let data = {prulia_id: prulia_id, nric_number: nric_number};
    return new Promise((resolve, reject) => {
      this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.forget_password'), data, {
        observe: 'response',
        withCredentials: true
      })
        .subscribe(res => {
          resolve(res.body);
        }, (err) => {
          reject(err);
        });
    });
  }

  update_password(old_password, new_password, fnSuccess, fnError) {
    let data = {
      old_password: old_password,
      new_password: new_password,
      logout_all_sessions: false
    }
    this.http.post(this.common.get_api_url('/api/method/frappe.core.doctype.user.user.update_password'), data, {withCredentials: true})
      .subscribe(res => {
        fnSuccess(res['message']);
      }, (err) => {
        fnError(err);
      });
  }

  set_sid_cookie() {
    console.log("Session ID found", localStorage.session_id);
    document.cookie = "sid=" + localStorage.session_id +
      "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }

}
