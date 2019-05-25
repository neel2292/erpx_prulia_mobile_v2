import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { HomeDetailPage } from '../pages/home-detail/home-detail'
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'
import { MemberDetailPage } from '../pages/member-detail/member-detail'
import { EventPrefPage } from '../pages/event-pref/event-pref'
import { MemberInfoPage } from '../pages/member-info/member-info'
import { UpdatePasswordPage } from '../pages/update-password/update-password'
import { EventPage } from "../pages/event/event"
import { EventDetailPage } from "../pages/event-detail/event-detail"
import { NewsletterPage } from "../pages/newsletter/newsletter"
import { NewsletterDetailPage } from "../pages/newsletter-detail/newsletter-detail"
import { PartnerPage } from "../pages/partner/partner"
import { PartnerDetailPage } from "../pages/partner-detail/partner-detail"



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CommonProvider } from '../providers/common/common';
import { PruliaMemberProvider } from '../providers/prulia-member/prulia-member';
import { NavigationProvider } from '../providers/navigation/navigation';
import { PruliaEventProvider } from '../providers/prulia-event/prulia-event';
import { PruliaNewsletterProvider } from '../providers/prulia-newsletter/prulia-newsletter';
import { AccordionComponent } from '../components/accordion/accordion';
import { PruliaBannerProvider } from '../providers/prulia-banner/prulia-banner';
import { PruliaHomeProvider } from '../providers/prulia-home/prulia-home';
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
    PartnerDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    PartnerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CommonProvider,
    PruliaMemberProvider,
    NavigationProvider,
    PruliaEventProvider,
    PruliaNewsletterProvider,
    PruliaBannerProvider,
    PruliaHomeProvider
  ]
})
export class AppModule {}
