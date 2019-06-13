import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Events} from 'ionic-angular/util/events';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {NavigationProvider} from '../providers/navigation/navigation';

declare var cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage: any;
  loader: any;
  cordova: any;

  @ViewChild(Nav) rootNav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage,
              auth: AuthServiceProvider, private navigation: NavigationProvider, private events: Events, private loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.presentLoading("Loading...");

      const args = ['GET', 'http://103.253.146.122'];
      cordova.exec(null, null, 'WKWebViewSyncCookies', 'sync', args);
      // WKWebViewSync.sync(args);

      if (localStorage.session_id) {
        auth.set_sid_cookie();
        auth.if_session_valid().then(data => {
            // if (data['message'] === "pong") {
            this.rootPage = TabsPage;
            // } else {
            //   this.rootPage = LoginPage
            // }
          }, (err => {
            this.rootPage = LoginPage
          })
        )
      } else {
        this.rootPage = LoginPage
      }

      this.dismissLoading();

      this.events.subscribe('navigate:logout', page => this.logoutUser(page));
      this.events.subscribe('loading:start', content => this.presentLoading(content));
      this.events.subscribe('loading:end', content => this.dismissLoading());
    });
  }

  ngOnInit(): void {
    this.navigation.initRootNav(this.rootNav);
  }

  private logoutUser(page) {
    this.rootNav.setRoot(LoginPage, {}, {animate: true, direction: 'back'});
  }

  presentLoading(content) {
    this.loader = this.loadingCtrl.create({
      content: content
    });
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }
}
