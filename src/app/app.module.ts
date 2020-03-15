import {NgModule, ErrorHandler} from '@angular/core';
import {IonicStorageModule} from '@ionic/storage';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Platform} from 'ionic-angular';
import {HttpBackend, HttpXhrBackend, HttpClientModule} from '@angular/common/http';
//ENABLE THIS ONLY FOR iOS
// import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import {MyApp} from './app.component';

import {ImagePicker} from '@ionic-native/image-picker';
import {Base64} from '@ionic-native/base64';

import {HomePage} from '../pages/home/home';
import {HomeDetailPage} from '../pages/home-detail/home-detail'
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile'
import {MemberDetailPage} from '../pages/member-detail/member-detail'
import {EventPrefPage} from '../pages/event-pref/event-pref'
import {MemberInfoPage} from '../pages/member-info/member-info'
import {UpdatePasswordPage} from '../pages/update-password/update-password'
import {EventPage} from "../pages/event/event"
import {EventDetailPage} from "../pages/event-detail/event-detail"
import {NewsletterPage} from "../pages/newsletter/newsletter"
import {NewsletterDetailPage} from "../pages/newsletter-detail/newsletter-detail"
import {PartnerPage} from "../pages/partner/partner"
import {PartnerDetailPage} from "../pages/partner-detail/partner-detail"
import { FeedbackPage } from "../pages/feedback/feedback";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {CommonProvider} from '../providers/common/common';
import {PruliaMemberProvider} from '../providers/prulia-member/prulia-member';
import {NavigationProvider} from '../providers/navigation/navigation';
import {PruliaEventProvider} from '../providers/prulia-event/prulia-event';
import {PruliaNewsletterProvider} from '../providers/prulia-newsletter/prulia-newsletter';
import {AccordionComponent} from '../components/accordion/accordion';
import {PruliaBannerProvider} from '../providers/prulia-banner/prulia-banner';
import {PruliaHomeProvider} from '../providers/prulia-home/prulia-home';
import { FeedbackProvider } from '../providers/feedback/feedback';

import { Mask } from './mask'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    HomeDetailPage,
    TabsPage,
    ProfilePage,
    MemberDetailPage,
    EventPrefPage,
    MemberInfoPage,
    UpdatePasswordPage,
    EventPage,
    EventDetailPage,
    NewsletterPage,
    NewsletterDetailPage,
    AccordionComponent,
    PartnerPage,
    PartnerDetailPage,
    FeedbackPage,
    Mask
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //ENABLE THIS ONLY FOR iOS
    // NativeHttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    HomeDetailPage,
    TabsPage,
    ProfilePage,
    MemberDetailPage,
    EventPrefPage,
    MemberInfoPage,
    UpdatePasswordPage,
    EventPage,
    EventDetailPage,
    NewsletterPage,
    NewsletterDetailPage,
    PartnerPage,
    PartnerDetailPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    //ENABLE THIS ONLY FOR iOS
    // {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CommonProvider,
    PruliaMemberProvider,
    NavigationProvider,
    PruliaEventProvider,
    PruliaNewsletterProvider,
    PruliaBannerProvider,
    PruliaHomeProvider,
    ImagePicker,
    Base64,
    FeedbackProvider
  ]
})
export class AppModule {
}
