import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, LoadingController, ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Events} from 'ionic-angular/util/events';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {EventPage} from "../pages/event/event";
import {NewsletterPage} from "../pages/newsletter/newsletter";
import { NewsletterDetailPage } from "../pages/newsletter-detail/newsletter-detail";
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {NavigationProvider} from '../providers/navigation/navigation';
import { CommonProvider } from "../providers/common/common";
import { PruliaMemberProvider } from "../providers/prulia-member/prulia-member";
import {NewsPopupPage} from "../pages/news-popup/news-popup";

declare var cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage: any;
  loader: any;
  cordova: any;
  oneSignal: any;
  allowPush: any = false;

  @ViewChild(Nav) rootNav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage, public commonProvider: CommonProvider,
              public memberProvider: PruliaMemberProvider, auth: AuthServiceProvider, private navigation: NavigationProvider,
              private events: Events, private loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.presentLoading("Loading...");

      const args = ['GET', commonProvider.get_service_endpoint(), '', ''];
      cordova.exec(function () {}, function (err) {
        //fail
        console.error(err)
      }, 'WKWebViewSyncCookies', 'sync', args);
      // WKWebViewSync.sync(args);

      if (localStorage.session_id) {
        auth.set_sid_cookie();
        auth.if_session_valid().then(data => {
            let greetingModal = this.modalCtrl.create(NewsPopupPage, {}, { cssClass: 'news-modal-popup' });
            // if (data['message'] === "pong") {
            this.rootPage = TabsPage;
            this.registerPushNoti();

            greetingModal.present();
          }, (err => {
            this.rootPage = LoginPage
          })
        )
      } else {
        this.rootPage = LoginPage
      }

      this.dismissLoading();

      this.events.subscribe('register:push', () => this.registerPushNoti());
      this.events.subscribe('navigate:logout', page => this.logoutUser(page));
      this.events.subscribe('loading:start', content => this.presentLoading(content));
      this.events.subscribe('loading:end', () => this.dismissLoading());
    });
  }

  ngOnInit(): void {
    this.navigation.initRootNav(this.rootNav);
  }

  private logoutUser(page) {
    this.oneSignal.setSubscription(false); //deregister push notification
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

  notiOpened(data) {
    let noti = data.notification,
      payload = noti.payload;

    if (this.allowPush) {
      switch (payload.groupKey) {
        case 'prulia_event':
          this.rootNav.push(EventPage);
          break;
        case 'prulia_news':
          if (payload.groupMessage) { this.rootNav.push(NewsletterDetailPage, {newsletter_name: payload.message}); }
          else { this.rootNav.push(NewsletterPage); }
          break;
      }
    }
  }

  registerPushNoti() {
    this.allowPush = true;

    setTimeout(() => {
      this.oneSignal = this.oneSignal || window['plugins'].OneSignal;
      //only register push noti if user is login
      this.oneSignal.startInit(this.commonProvider.getOneSignalAppId())
        .iOSSettings({
          kOSSettingsKeyAutoPrompt: true,
          kOSSettingsKeyInAppLaunchURL: false
        })
        .inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
        .handleNotificationOpened(this.notiOpened.bind(this))
        .endInit();

      this.oneSignal.setSubscription(true);

      //register tag
      this.memberProvider.get_member_profile(true).then(member => {
        let position = member['position'];

        if (position) {
          this.oneSignal.getTags(tags => {
            if (tags.position !== position) {
              //set tag based on position
              this.oneSignal.sendTag('position', position);
            }
          });
        }
      });
    }, 1000);
  }
}
