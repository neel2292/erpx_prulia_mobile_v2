import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavigationProvider {

  private rootNav: NavController;

  constructor(public http: HttpClient, private events: Events) {
    console.log('Hello NavigationProvider Provider');
  }

  initRootNav(rootNav: NavController) {
    this.rootNav = rootNav;
  }

  userLogout() {
    this.events.publish('navigate:logout');
  }

}
