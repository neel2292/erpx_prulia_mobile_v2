webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newsletter_newsletter__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partner_partner__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__newsletter_newsletter__["a" /* NewsletterPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__partner_partner__["a" /* PartnerPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="ribbon"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="News" tabIcon="desktop"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Partner" tabIcon="people"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPrefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prulia_event_prulia_event__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventPrefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPrefPage = (function () {
    function EventPrefPage(navCtrl, navParams, memberProvider, eventProvider, alertCtrl, toastCtrl, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
        this.eventProvider = eventProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.member = {
            shirt_size: "",
            meal_option: "",
            name: "",
            accomodation: ""
        };
        this.acknowledgement = false;
        this.mode = "New";
        this.member = Object.assign({}, navParams.get('value'));
        this.mode = navParams.get('mode');
        if (this.member.accomodation == undefined) {
            this.member.accomodation = "";
        }
        if (this.member.shirt_size == undefined) {
            this.member.shirt_size = "";
        }
    }
    EventPrefPage.prototype.saveEventPref = function () {
        var that = this;
        this.events.publish('loading:start', 'Saving...');
        switch (this.mode) {
            case "Profile":
                this.memberProvider.post_member_profile(this.member, function (data) {
                    var toast = that._createToast('Perferences was update successfully');
                    that.memberProvider.get_member_profile(true)
                        .then(function (data) {
                        that.events.publish('loading:end');
                        that.dismiss();
                        toast.present();
                    }, (function (error) {
                        that._displayError(error);
                    }));
                }, function (error) {
                    that._displayError(error);
                });
                break;
            case "Update":
                this.eventProvider.update_event_registration(this.member, function (data) {
                    var toast = that._createToast('Registration was update successfully');
                    that.events.publish('event:update', function () {
                        that.events.publish('loading:end');
                        that.dismiss();
                        toast.present();
                    });
                }, function (error) {
                    that._displayError(error);
                });
                break;
            case "New":
                if (this.acknowledgement) {
                    this.eventProvider.create_event_registration({
                        "member": that.memberProvider.member.name,
                        "member_name": that.memberProvider.member.full_name,
                        "event": this.member.name,
                        "meal": this.member.meal_option,
                        "shirt": this.member.shirt_size,
                        "accomodation": this.member.accomodation
                    }, function (data) {
                        var toast = that._createToast('Registration was update successfully');
                        that.events.publish('event:update', function () {
                            that.events.publish('loading:end');
                            that.dismiss();
                            toast.present();
                        });
                    }, function (error) {
                        that._displayError(error);
                    });
                }
                else {
                    that._displayAckError();
                }
                break;
        }
    };
    EventPrefPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPrefPage');
    };
    EventPrefPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EventPrefPage.prototype._displayAckError = function () {
        console.log("No acknowledgement");
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please kindly acknowledge the declaration by clicking the checkbox in the form',
            buttons: ['Dismiss']
        });
        this.events.publish('loading:end');
        alert.present();
    };
    EventPrefPage.prototype._displayError = function (error) {
        console.log(error);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error in update',
            buttons: ['Dismiss']
        });
        this.events.publish('loading:end');
        alert.present();
    };
    EventPrefPage.prototype._createToast = function (message) {
        return this.toastCtrl.create({
            message: message,
            duration: 10000,
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'bottom'
        });
    };
    EventPrefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-pref',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event-pref\event-pref.html"*/'<!--\n  Generated template for the EventPrefPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start *ngIf="mode" [hidden]="mode===\'Profile\'">\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>Event Perferences</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="member">\n	<form #formCtrl="ngForm" class="list-form">\n		<ion-list>\n		     <ion-item no-lines>\n		        <ion-label floating>Meal Perference</ion-label>\n		        <ion-select [(ngModel)]="member.meal_option" name="meal_option" required>\n		            <ion-option value="Non-Vegetarian">Non-Vegetarian</ion-option>\n		            <ion-option value="Vegetarian">Vegetarian</ion-option>\n		        </ion-select>\n		     </ion-item>\n		     <ion-item no-lines [hidden]="mode === \'New\' && member.display_shirt_option == \'0\'">\n		        <ion-label floating>Shirt Size Perference</ion-label>\n		        <ion-select [(ngModel)]="member.shirt_size" name="shirt_size" required>\n		            <ion-option value="XS">Extra Small (XS)</ion-option>\n		            <ion-option value="S">Small (S)</ion-option>\n		            <ion-option value="M">Medium (M)</ion-option>\n		            <ion-option value="L">Large (L)</ion-option>\n		            <ion-option value="XL">Extra Large (XL)</ion-option>\n		            <ion-option value="XXL">Double Extra Large (XXL)</ion-option>\n		            <ion-option value="XXXL">Triple Extra Large (XXXL)</ion-option>\n		        </ion-select>\n		     </ion-item>\n		     <ion-item no-lines [hidden]="member.display_accomodation_option != 1">\n		        <ion-label floating>Accomodation Needed</ion-label>\n		        <ion-select [(ngModel)]="member.accomodation" name="accomodation" required>\n		            <ion-option value="Yes">Yes</ion-option>\n		            <ion-option value="No">No</ion-option>\n		        </ion-select>\n		     </ion-item>\n	  </ion-list>\n	  <div [hidden]="mode !== \'New\'">\n	  	<p>I declare that the information given herein are correct to the best of my knowledge and belief. </p> \n		<p>I agree to be govern by the rules and regulations of PRULIA as they now exist as they may hereafter be altered.</p>\n		<p>I hereby authorize Prudential Assurance Malaysia Berhad to debit by commission account for the registration of the event</p>\n		<p><ion-checkbox [(ngModel)]="acknowledgement" name="acknowledgement"></ion-checkbox>  I agree the statement above</p>\n	  </div>\n	</form>\n	<div>\n      <button ion-button icon-start block color="secondary" tappable (click)="saveEventPref()">\n        <ion-icon name="save"></ion-icon>\n        SAVE\n      </button>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event-pref\event-pref.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prulia_event_prulia_event__["a" /* PruliaEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], EventPrefPage);
    return EventPrefPage;
}());

//# sourceMappingURL=event-pref.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NavigationProvider = (function () {
    function NavigationProvider(http, events) {
        this.http = http;
        this.events = events;
        console.log('Hello NavigationProvider Provider');
    }
    NavigationProvider.prototype.initRootNav = function (rootNav) {
        this.rootNav = rootNav;
    };
    NavigationProvider.prototype.userLogout = function () {
        this.events.publish('navigate:logout');
    };
    NavigationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__["a" /* Events */]])
    ], NavigationProvider);
    return NavigationProvider;
}());

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruliaHomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruliaHomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruliaHomeProvider = (function () {
    function PruliaHomeProvider(http, common) {
        this.http = http;
        this.common = common;
        this.home_entries = [];
        console.log('Hello PruliaHomeProvider Provider');
    }
    PruliaHomeProvider.prototype.get_home_listing = function (bForceRefresh) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (bForceRefresh || that.home_entries.length < 1) {
                that._load_home_listing(function () {
                    resolve(that.home_entries);
                }, function () {
                    reject("Unable to retrieve the information");
                });
            }
            else {
                resolve(that.home_entries);
            }
        });
    };
    PruliaHomeProvider.prototype._load_home_listing = function (fnSuccess, fnError) {
        var _this = this;
        this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_home.prulia_home.get_home'), { withCredentials: true })
            .subscribe(function (res) {
            if (res['message']['content'] instanceof Array) {
                _this.home_entries = res['message']['content'];
            }
            else {
                _this.home_entries = [];
            }
            for (var _i = 0, _a = _this.home_entries; _i < _a.length; _i++) {
                var home = _a[_i];
                if (!home['image'] || home['image'] === null) {
                    home['image'] = "../www/assets/imgs/Prulia-word-logo.png";
                }
                else if (!home['image'].startsWith("http")) {
                    home['image'] = _this.common.get_service_endpoint() + home['image'];
                }
            }
            console.log(_this.home_entries);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError();
        });
    };
    PruliaHomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */]])
    ], PruliaHomeProvider);
    return PruliaHomeProvider;
}());

//# sourceMappingURL=prulia-home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruliaNewsletterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruliaNewsletterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruliaNewsletterProvider = (function () {
    function PruliaNewsletterProvider(http, common) {
        this.http = http;
        this.common = common;
        this.newsletters = [];
        console.log('Hello PruliaNewsletterProvider Provider');
    }
    PruliaNewsletterProvider.prototype.get_newsletter_listing = function (bForceRefresh, queryWords, member_name) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (bForceRefresh || that.newsletters.length < 1) {
                that._load_newsletter_listing(member_name, function () {
                    resolve(that.newsletters);
                }, function () {
                    reject("Unable to retrieve the information");
                });
            }
            else {
                resolve(that.newsletters);
            }
        });
    };
    PruliaNewsletterProvider.prototype._load_newsletter_listing = function (member_name, fnSuccess, fnError) {
        var _this = this;
        this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_newsletter.prulia_newsletter.get_newsletter_list'), {
            withCredentials: true,
            params: { member_name: member_name }
        })
            .subscribe(function (res) {
            if (res['message'] instanceof Array) {
                _this.newsletters = res['message'];
            }
            else {
                _this.newsletters = [];
            }
            for (var _i = 0, _a = _this.newsletters; _i < _a.length; _i++) {
                var newsletter = _a[_i];
                if (!newsletter['news_image'] || newsletter['news_image'] === null) {
                    newsletter['news_image'] = "../www/assets/imgs/Prulia-word-logo.png";
                }
                else {
                    newsletter['news_image'] = _this.common.get_service_endpoint() + newsletter['news_image'];
                }
                newsletter['publish_date'] = new Date(newsletter['publish_date'] + 'T00:00:00+08:00');
            }
            // if(this.events.profile_photo !== ""){
            //   this.events.profile_photo = this.common.get_service_endpoint() + this.events.profile_photo;
            // } else {
            //   this.events.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
            // }
            console.log(_this.newsletters);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError();
        });
    };
    PruliaNewsletterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */]])
    ], PruliaNewsletterProvider);
    return PruliaNewsletterProvider;
}());

//# sourceMappingURL=prulia-newsletter.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruliaBannerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruliaBannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruliaBannerProvider = (function () {
    function PruliaBannerProvider(http, common) {
        this.http = http;
        this.common = common;
        this.banners = [];
        console.log('Hello PruliaBannerProvider Provider');
    }
    PruliaBannerProvider.prototype.get_banner = function (bForceRefresh) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (bForceRefresh || that.banners.length < 1) {
                that._load_prulia_banner(function () {
                    resolve(that.banners);
                }, function () {
                    reject("Unable to retrieve the information");
                });
            }
            else {
                resolve(that.banners);
            }
        });
    };
    PruliaBannerProvider.prototype._load_prulia_banner = function (fnSuccess, fnError) {
        var _this = this;
        this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_news.doctype.prulia_banner.prulia_banner.get_banner'), { withCredentials: true })
            .subscribe(function (res) {
            if (res['message'] instanceof Array) {
                _this.banners = res['message'];
            }
            else {
                _this.banners = [];
            }
            for (var _i = 0, _a = _this.banners; _i < _a.length; _i++) {
                var banner = _a[_i];
                if (!banner['image'] || banner['image'] === null) {
                    banner['image'] = "../www/assets/imgs/Prulia-word-logo.png";
                }
                else {
                    banner['image'] = _this.common.get_service_endpoint() + banner['image'];
                }
            }
            console.log(_this.banners);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError();
        });
    };
    PruliaBannerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */]])
    ], PruliaBannerProvider);
    return PruliaBannerProvider;
}());

//# sourceMappingURL=prulia-banner.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_detail_member_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_pref_event_pref__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__member_info_member_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__update_password_update_password__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, memberProvider, auth, appEvent, alertCtrl, imagePicker, base64) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
        this.auth = auth;
        this.appEvent = appEvent;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.profileExpand = false;
        this.eventExpand = false;
    }
    ProfilePage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__member_detail_member_detail__["a" /* MemberDetailPage */], { value: this.memberProvider.member });
    };
    ProfilePage.prototype.goToMemberInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__member_info_member_info__["a" /* MemberInfoPage */], { value: this.memberProvider.member, mode: "Profile" });
    };
    ProfilePage.prototype.goToEventPerferences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_pref_event_pref__["a" /* EventPrefPage */], { value: this.memberProvider.member, mode: "Profile" });
    };
    ProfilePage.prototype.goToUpdatePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__update_password_update_password__["a" /* UpdatePasswordPage */], { value: this.memberProvider.member });
    };
    ProfilePage.prototype.logout = function () {
        this.auth.logout();
    };
    ProfilePage.prototype.hideList = function (expandedAccordion) {
        // switch (expandedAccordion) {
        // 	case "Profile":
        this.profileExpand = false;
        this.eventExpand = false;
        // 	break;
        // default:
        // 	// code...
        // 	break;
        // }(expandedAccordion)
    };
    ProfilePage.prototype.selectPicture = function () {
        var _this = this;
        var options = { maximumImagesCount: 1 };
        this.appEvent.publish('loading:start', 'Loading...');
        this.imagePicker.getPictures(options).then(function (results) {
            var result = results[0];
            if (result && Array.isArray(results)) {
                _this.base64.encodeFile(result).then(function (b64) {
                    b64 = b64.split('base64,').pop();
                    _this.uploadPicture(result, b64);
                }, function (err) {
                    _this._displayError(err);
                });
            }
            else {
                _this.appEvent.publish('loading:end');
            }
        }, function (err) {
            _this._displayError(err);
        });
    };
    ProfilePage.prototype.uploadPicture = function (path, b64) {
        var _this = this;
        if (getSize(b64) > 2000) {
            this.appEvent.publish('loading:end');
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'File limit size is 2MB',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else {
            this.memberProvider.post_member_picture({
                filename: path.split('/').pop(),
                filedata: b64
            }, function (data) {
                console.log(data);
                _this.appEvent.publish('loading:end');
            }, function (err) {
                _this._displayError(err);
            });
        }
        //returns in kB
        function getSize(base64) {
            return (4 * Math.ceil(base64.length / 3)) / 1000;
        }
    };
    ProfilePage.prototype._displayError = function (error) {
        console.log(error);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error in update',
            buttons: ['Dismiss']
        });
        this.appEvent.publish('loading:end');
        alert.present();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.appEvent.publish('loading:start', 'Loading...');
        this.memberProvider.get_member_profile(false)
            .then(function (data) {
            _this.appEvent.publish('loading:end');
        }, (function (error) {
            console.log(error);
        }));
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content fullscreen no-bounce class="bg-modal header-image" [ngStyle]="{\'background-image\': \'url(\' + this.memberProvider.member.profile_photo +\')\'}">\n    <div class="bler">\n\n    </div>\n    <div class="absolute">\n    <div class="main-content" text-wrap text-center>\n      <div class="align-mid">\n        <div class="circular" (click)="selectPicture()" [ngStyle]="{\'background-image\': \'url(\' + this.memberProvider.member.profile_photo +\')\'}"></div>\n        <h2>{{this.memberProvider.member.full_name}}</h2>\n        <!-- <p class="profile-description">{{member.prudential_id}}</p> -->\n        <!-- <hr> -->\n        <br />\n\n        <ion-list no-lines>\n          <accordion title="Personal Information" [expanded]="this.profileExpand" (click)="hideList(\'Profile\')" >\n            <ion-list>\n              <ion-item>\n                <ion-icon name="card" item-start></ion-icon>\n                {{this.memberProvider.member.nric_number}}\n              </ion-item>\n              <ion-item>\n                <ion-icon [name]="this.memberProvider.member.gender == \'Male\' ? \'male\' : \'female\'" item-start></ion-icon>\n                {{this.memberProvider.member.gender}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="call" item-start></ion-icon>\n                {{this.memberProvider.member.cell_number}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="mail" item-start></ion-icon>\n                {{this.memberProvider.member.email}}\n              </ion-item>\n              <button ion-item full color="primary" (click)="goToMemberInfo()">\n                <ion-icon name="create" item-start></ion-icon>\n                <ion-label>Update Personal Information</ion-label>\n              </button>\n            </ion-list>\n          </accordion>\n          <accordion title="Prudential Information" [expanded]="this.eventExpand" (click)="hideList(\'event\')"><ion-list>\n              <ion-item>\n                <ion-icon name="person" item-start></ion-icon>\n                {{this.memberProvider.member.prudential_id}} (Agent ID, eg: 1234567)\n              </ion-item>\n              <ion-item>\n                <ion-icon name="briefcase" item-start></ion-icon>\n                {{this.memberProvider.member.branch}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="globe" item-start></ion-icon>\n                {{this.memberProvider.member.region}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="star" item-start></ion-icon>\n                {{this.memberProvider.member.position}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="people" item-start></ion-icon>\n                {{this.memberProvider.member.agency_no}} (Agency Code, eg: ABC12345)\n              </ion-item>\n            </ion-list></accordion>\n          <accordion title="Event Perferences">\n              <ion-item>\n                <ion-icon name="restaurant" item-start></ion-icon>\n                {{this.memberProvider.member.meal_option}}\n              </ion-item>\n              <ion-item>\n                <ion-icon name="shirt" item-start></ion-icon>\n                {{this.memberProvider.member.shirt_size}}\n              </ion-item>\n              <button ion-item full color="primary" (click)="goToEventPerferences()">\n                <ion-icon name="create" item-start></ion-icon>\n                <ion-label>Update Default Event Perferences</ion-label>\n              </button>\n          </accordion>\n          <ion-item transparent>\n            <ion-grid class="grid" no-padding>\n              <ion-row>\n                <ion-col col-6>\n                  <accordion title="Update Password" [expanded]="false" [expandable]="false" icon="lock" (click)="goToUpdatePassword()"></accordion>\n                </ion-col>\n                <ion-col col-6>\n                  <accordion title="Sign Out" [expanded]="false" [expandable]="false" icon="log-out" (click)="logout()"></accordion>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <!-- <accordion title="Update Password" [expanded]="false" [expandable]="false" icon="lock" (click)="goToUpdatePassword()"></accordion>\n          <accordion title="Sign Out" [expanded]="false" [expandable]="false" icon="log-out" (click)="logout()"></accordion> -->\n            <!-- <button ion-item (click)="goToProfile()">\n              <ion-label>View Membership Profile</ion-label>\n            </button>\n            <button ion-item (click)="goToEventPerferences()">\n              <ion-label>Update Default Event Perferences</ion-label>\n            </button>\n            <button ion-item (click)="goToUpdatePassword()">\n              <ion-label>Update Password</ion-label>\n            </button>\n            <button ion-item (click)="logout()">\n              <ion-label>Sign Out</ion-label>\n            </button> -->\n        </ion-list>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MemberDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberDetailPage = (function () {
    function MemberDetailPage(navCtrl, navParams, memberProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
    }
    MemberDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberDetailPage');
    };
    MemberDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-detail',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\member-detail\member-detail.html"*/'<!--\n  Generated template for the MemberDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Member\'s Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="label-demo">\n\n  <ion-list>\n  	<ion-list-header>\n		Personnal Information\n	</ion-list-header>\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.full_name" name="name" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">NRIC Number</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.nric_number" name="nric_number" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Gender</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.gender" name="gender" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Contact</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.cell_number" name="cell_number" readonly></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n  	<ion-list-header>\n		Prudential Information\n	</ion-list-header>\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Prudential ID</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.prudential_id" name="prudential_id" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Branch</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.branch" name="branch" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Region</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.region" name="region" readonly></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label stacked color="primary">Position</ion-label>\n      <ion-input [(ngModel)]="memberProvider.member.position" name="position" readonly></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\member-detail\member-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());

//# sourceMappingURL=member-detail.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MemberInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberInfoPage = (function () {
    function MemberInfoPage(navCtrl, navParams, memberProvider, alertCtrl, toastCtrl, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.member = {
            full_name: '',
            nric_number: '',
            gender: '',
            cell_number: '',
            email: ''
        };
        this.acknowledgement = false;
        this.mode = "New";
        this.member = Object.assign({}, navParams.get('value'));
        this.mode = navParams.get('mode');
        Object.keys(this.member).forEach(function (key) {
            if (this.member[key] === undefined) {
                this.member[key] = '';
            }
        }.bind(this));
    }
    MemberInfoPage.prototype.saveMemberInfo = function () {
        var that = this;
        this.events.publish('loading:start', 'Saving...');
        this.memberProvider.post_member_profile(this.member, function (data) {
            var toast = that._createToast('Personal information was update successfully');
            that.memberProvider.get_member_profile(true)
                .then(function (data) {
                that.events.publish('loading:end');
                that.dismiss();
                toast.present();
            }, (function (error) {
                that._displayError(error);
            }));
        }, function (error) {
            that._displayError(error);
        });
    };
    MemberInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberInfoPage');
    };
    MemberInfoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MemberInfoPage.prototype._displayAckError = function () {
        console.log("No acknowledgement");
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please kindly acknowledge the declaration by clicking the checkbox in the form',
            buttons: ['Dismiss']
        });
        this.events.publish('loading:end');
        alert.present();
    };
    MemberInfoPage.prototype._displayError = function (error) {
        console.log(error);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error in update',
            buttons: ['Dismiss']
        });
        this.events.publish('loading:end');
        alert.present();
    };
    MemberInfoPage.prototype._createToast = function (message) {
        return this.toastCtrl.create({
            message: message,
            duration: 10000,
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'bottom'
        });
    };
    MemberInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-info',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\member-info\member-info.html"*/'<!--\n  Generated template for the EventPrefPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start *ngIf="mode" [hidden]="mode===\'Profile\'">\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>Personal Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="member">\n	<form #formCtrl="ngForm" class="list-form">\n		<ion-list>\n      <ion-item no-lines>\n        <ion-label floating>Name</ion-label>\n        <ion-input [(ngModel)]="member.full_name" name="full_name" required type="text"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label floating>NRIC Number (eg: xxxx-xx-xxxx)</ion-label>\n        <ion-input [(ngModel)]="member.nric_number" name="nric_number" required type="text" placeholder="xxxx-xx-xxxx"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label floating>Gender</ion-label>\n        <ion-select [(ngModel)]="member.gender" name="gender" required>\n          <ion-option value="Male">Male</ion-option>\n          <ion-option value="Female">Female</ion-option>\n        </ion-select>\n       </ion-item>\n      <ion-item no-lines>\n        <ion-label floating>Mobile Number (eg: 601x xxx xxxx)</ion-label>\n        <ion-input [(ngModel)]="member.cell_number" name="cell_number" required type="number" placeholder="eg: 601x xxx xxxx"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label floating>Email</ion-label>\n        <ion-input [(ngModel)]="member.email" name="email" required type="email"></ion-input>\n      </ion-item>\n		     <!--<ion-item no-lines>-->\n		        <!--<ion-label floating>Meal Perference</ion-label>-->\n		        <!--<ion-select [(ngModel)]="member.meal_option" name="meal_option" required>-->\n		            <!--<ion-option value="Non-Vegetarian">Non-Vegetarian</ion-option>-->\n		            <!--<ion-option value="Vegetarian">Vegetarian</ion-option>-->\n		        <!--</ion-select>-->\n		     <!--</ion-item>-->\n		     <!--<ion-item no-lines [hidden]="mode === \'New\' && member.display_shirt_option == \'0\'">-->\n		        <!--<ion-label floating>Shirt Size Perference</ion-label>-->\n		        <!--<ion-select [(ngModel)]="member.shirt_size" name="shirt_size" required>-->\n		            <!--<ion-option value="XS">Extra Small (XS)</ion-option>-->\n		            <!--<ion-option value="S">Small (S)</ion-option>-->\n		            <!--<ion-option value="M">Medium (M)</ion-option>-->\n		            <!--<ion-option value="L">Large (L)</ion-option>-->\n		            <!--<ion-option value="XL">Extra Large (XL)</ion-option>-->\n		            <!--<ion-option value="XXL">Double Extra Large (XXL)</ion-option>-->\n		            <!--<ion-option value="XXXL">Triple Extra Large (XXXL)</ion-option>-->\n		        <!--</ion-select>-->\n		     <!--</ion-item>-->\n		     <!--<ion-item no-lines [hidden]="member.display_accomodation_option != 1">-->\n		        <!--<ion-label floating>Accomodation Needed</ion-label>-->\n		        <!--<ion-select [(ngModel)]="member.accomodation" name="accomodation" required>-->\n		            <!--<ion-option value="Yes">Yes</ion-option>-->\n		            <!--<ion-option value="No">No</ion-option>-->\n		        <!--</ion-select>-->\n		     <!--</ion-item>-->\n	  </ion-list>\n	  <div [hidden]="mode !== \'New\'">\n	  	<p>I declare that the information given herein are correct to the best of my knowledge and belief. </p>\n		<p>I agree to be govern by the rules and regulations of PRULIA as they now exist as they may hereafter be altered.</p>\n		<p>I hereby authorize Prudential Assurance Malaysia Berhad to debit by commission account for the registration of the event</p>\n		<p><ion-checkbox [(ngModel)]="acknowledgement" name="acknowledgement"></ion-checkbox>  I agree the statement above</p>\n	  </div>\n	</form>\n	<div>\n      <button ion-button icon-start block color="secondary" tappable (click)="saveMemberInfo()">\n        <ion-icon name="save"></ion-icon>\n        SAVE\n      </button>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\member-info\member-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], MemberInfoPage);
    return MemberInfoPage;
}());

//# sourceMappingURL=member-info.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePasswordPage = (function () {
    function UpdatePasswordPage(navCtrl, navParams, events, authProvider, alertCtrl, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
    }
    UpdatePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePasswordPage');
    };
    UpdatePasswordPage.prototype.updatePassword = function () {
        var that = this;
        this.events.publish('loading:start', 'Updating...');
        this.authProvider.update_password(this.old_password.value, this.new_password.value, function () {
            var toast = that.toastCtrl.create({
                message: 'Password was update successfully',
                duration: 10000,
                showCloseButton: true,
                closeButtonText: 'OK',
                position: 'bottom'
            });
            that.dismiss();
            that.events.publish('loading:end');
            toast.present();
        }, function (err) {
            console.log(err);
            var errMsg = "";
            if (err['status'] == 401) {
                errMsg = "Please Provide a valid password";
            }
            else {
                errMsg = 'Unable to update the password, please contact Administrator';
            }
            var alert = that.alertCtrl.create({
                title: 'Update Password Unsuccessful',
                message: errMsg,
                buttons: ['OK']
            });
            that.events.publish('loading:end');
            alert.present();
        });
    };
    UpdatePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("old_password"),
        __metadata("design:type", Object)
    ], UpdatePasswordPage.prototype, "old_password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("new_password"),
        __metadata("design:type", Object)
    ], UpdatePasswordPage.prototype, "new_password", void 0);
    UpdatePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-password',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\update-password\update-password.html"*/'<!--\n  Generated template for the UpdatePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form #formCtrl="ngForm" class="list-form">\n		<ion-list>\n			<ion-item no-lines>\n		        <ion-label floating>Current Password</ion-label>\n		        <ion-input type="password" required #old_password></ion-input>\n		     </ion-item>\n		     <ion-item no-lines>\n		        <ion-label floating>New Password</ion-label>\n		        <ion-input type="password" required #new_password></ion-input>\n		     </ion-item> \n	  </ion-list>\n	</form>\n	<div>\n      <button ion-button icon-start block color="secondary" tappable (click)="updatePassword()">\n        <ion-icon name="save"></ion-icon>\n        Update Password\n      </button>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\update-password\update-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UpdatePasswordPage);
    return UpdatePasswordPage;
}());

//# sourceMappingURL=update-password.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prulia_event_prulia_event__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_detail_event_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(navCtrl, navParams, memberProvider, eventProvider, appEvent) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
        this.eventProvider = eventProvider;
        this.appEvent = appEvent;
        // @ViewChild('eventList', { read: List }) eventList: List;
        this.queryText = "";
        this.appEvent.subscribe('event:update', function (fnSuccess) { return _this._updateSchedule(true, true, fnSuccess); });
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
        this._updateSchedule(false, false);
    };
    EventPage.prototype.doRefresh = function (refresher) {
        this._updateSchedule(true, false, (function (data) {
            refresher.complete();
        }), (function (data) {
            refresher.complete();
        }));
    };
    EventPage.prototype.eventTapped = function (event_name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_detail_event_detail__["a" /* EventDetailPage */], { event_name: event_name });
    };
    EventPage.prototype._updateSchedule = function (bRefresh, bFromModel, fnSuccess, fnError) {
        var _this = this;
        if (!bFromModel) {
            this.appEvent.publish('loading:start', 'Loading...');
        }
        this.eventProvider.get_event_listing(true, this.queryText, this.memberProvider.member.name)
            .then(function (data) {
            if (fnSuccess) {
                fnSuccess();
            }
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }, (function (error) {
            if (fnError) {
                fnError();
            }
            console.log(error);
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }));
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event\event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Event</ion-title>\n  </ion-navbar>\n    <!-- <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class="event-page">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list [virtualScroll] = "eventProvider.listings" [hidden]="eventProvider.listings.length === 0">\n    	<ion-card *virtualItem="let listing" (click)="eventTapped(listing.name)" ion-item>\n        <div class="card_background" [ngStyle]="{\'background-image\': \'url(\' + listing.event_image +\')\'}">\n        </div>\n        <div class="registered" [hidden]="!listing.register">Registered</div>\n        <div class="open_registration" [hidden]="!(!listing.register && listing.event_status== \'Open For Registration\') && !(listing.event_status == \'Publish\' && listing.show_open_for_registration == 1)">\n          Ready for Registration\n        </div>\n        <div class="close_registration" [hidden]="!(!listing.register && listing.event_status== \'Registration Closed\')">Registration Closed</div>\n        <div class="card_content">\n          <div class="event_image">\n            <img [src]="listing.event_image"  />\n          </div>\n\n        </div>\n        <div class="description">\n          <h1 class="event_title">\n                {{listing.event_name}}\n            </h1>\n          <p class="event_subtitle">\n                {{listing.start_date_time | date: \'MMM d, y, h:mm a\'}} -\n                {{listing.start_date_time.getDate() == listing.end_date_time.getDate() ? (listing.end_date_time | date: \'h:mm a\' ) : (listing.end_date_time | date: \'MMM d, y, h:mm a\') }}\n                <br />\n                {{listing.venue}}\n            </p>\n        </div>\n	   </ion-card>\n\n  </ion-list>\n\n  <ion-list-header [hidden]="eventProvider.listings.length > 0">\n      No Events Found\n  </ion-list-header>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prulia_event_prulia_event__["a" /* PruliaEventProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__["a" /* Events */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_pref_event_pref__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prulia_event_prulia_event__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams, modalCtrl, eventProvider, memberProvider, alertCtrl, appEvent, toastCtrl, renderer, elRef, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.eventProvider = eventProvider;
        this.memberProvider = memberProvider;
        this.alertCtrl = alertCtrl;
        this.appEvent = appEvent;
        this.toastCtrl = toastCtrl;
        this.renderer = renderer;
        this.elRef = elRef;
        this.plt = plt;
        this.eventIter = 0;
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailPage');
        for (var i = 0; i < this.eventProvider.listings.length; i++) {
            if (this.eventProvider.listings[i].name === this.navParams.get('event_name')) {
                this.eventIter = i;
                break;
            }
            console.log(this.eventProvider.listings[this.eventIter]);
        }
    };
    EventDetailPage.prototype.ionViewDidEnter = function () {
        this.appEvent.publish('loading:start', 'loading...');
        // if(this.plt.is('ios')){
        var links = this.elRef.nativeElement.querySelectorAll('a');
        links.forEach(function (element) {
            this.renderer.listen(element, 'tap', function (evt) {
                // console.log();
                // evt.stopPropagation();
                window.open(element.getAttribute('href'), '_system');
                return false;
            });
        }, this);
        // }
        this.appEvent.publish('loading:end');
    };
    EventDetailPage.prototype.register = function () {
        var tempEvent = Object.assign({}, this.eventProvider.listings[this.eventIter]);
        tempEvent.meal_option = this.memberProvider.member.meal_option;
        if (tempEvent.display_shirt_option == 1) {
            tempEvent.shirt_size = this.memberProvider.member.shirt_size;
        }
        if (tempEvent.display_accomodation_option == 1) {
            tempEvent.accomodation = "Yes";
        }
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__event_pref_event_pref__["a" /* EventPrefPage */], { 'value': tempEvent, mode: 'New' });
        myModal.present();
    };
    EventDetailPage.prototype.update = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__event_pref_event_pref__["a" /* EventPrefPage */], {
            'value': this.eventProvider.listings[this.eventIter],
            mode: 'Update'
        });
        myModal.present();
    };
    EventDetailPage.prototype.cancel = function () {
        var _this = this;
        var that = this;
        var confirm = this.alertCtrl.create({
            title: 'Withdraw Confirmation',
            message: 'Are you sure you want to withdraw your registration?',
            buttons: [
                {
                    text: 'Withdraw',
                    handler: function () {
                        console.log('Withdraw clicked');
                        _this.appEvent.publish('loading:start', 'Cancelling...');
                        _this.eventProvider.withdraw_event_registration({
                            member: _this.memberProvider.member.prudential_id,
                            event: _this.eventProvider.listings[_this.eventIter].name
                        }, function () {
                            var toast = that.toastCtrl.create({
                                message: 'Your registration was withdraw successfully',
                                duration: 10000,
                                showCloseButton: true,
                                closeButtonText: 'OK',
                                position: 'bottom'
                            });
                            that.appEvent.publish('event:update', function () {
                                that.appEvent.publish('loading:end');
                                toast.present();
                            });
                        }, function (error) {
                            var alert = that.alertCtrl.create({
                                title: 'Error',
                                subTitle: 'Error in update',
                                buttons: ['Dismiss']
                            });
                            that.appEvent.publish('loading:end');
                            alert.present();
                            console.log(error);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-detail',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event-detail\event-detail.html"*/'<!--\n  Generated template for the EventDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <ion-title *ngIf="eventProvider.listings[eventIter]" text-uppercase>{{eventProvider.listings[eventIter].event_name}}</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="event-det-page">\n  <div class="content" *ngIf="eventProvider.listings[eventIter]">\n      <div class="the-header">\n        <div class="background">\n          <div class="image_background" [ngStyle]="{\'background-image\': \'url(\' + eventProvider.listings[eventIter].event_image +\')\'}">\n          </div>\n          <img [src]="eventProvider.listings[eventIter].event_image"/>\n        </div>\n        <button ion-fab>\n          <ion-icon name="ribbon"></ion-icon>\n        </button>\n      </div>\n      <div class="the-content" padding >\n        <div class="transparent-bg">\n          <h1>{{eventProvider.listings[eventIter].event_name}}</h1>\n          \n          </div>\n      </div>\n      <div padding [innerHtml]="eventProvider.listings[eventIter].description"></div>\n      <div class="the-details">\n        <ion-list padding no-lines>\n          <ion-item text-wrap class="item item-trns">\n            <ion-icon name="time" item-start></ion-icon>\n            {{eventProvider.listings[eventIter].start_date_time | date: \'MMM d, y, h:mm a\'}} - \n              {{eventProvider.listings[eventIter].start_date_time.getDate() == eventProvider.listings[eventIter].end_date_time.getDate() ? (eventProvider.listings[eventIter].end_date_time | date: \'h:mm a\') : (eventProvider.listings[eventIter].end_date_time | date: \'MMM d, y, h:mm a\') }}\n          </ion-item>\n          <ion-item text-wrap class="item item-trns">\n            <ion-icon name="pin" item-start></ion-icon>\n            {{eventProvider.listings[eventIter].venue}}\n          </ion-item>\n           <div [hidden]="eventProvider.listings[eventIter].event_status!== \'Open For Registration\'"> \n            <button ion-button block [hidden]="eventProvider.listings[eventIter].register" (click)="register()">Register</button>\n          </div>\n          <ion-item text-wrap class="item item-trns" [hidden]="!eventProvider.listings[eventIter].register">\n            <ion-icon name="restaurant" item-start></ion-icon>\n            {{eventProvider.listings[eventIter].meal_option}}\n          </ion-item>\n          <ion-item text-wrap class="item item-trns" [hidden]="!eventProvider.listings[eventIter].register || eventProvider.listings[eventIter].display_shirt_option == \'0\'">\n            <ion-icon name="shirt" item-start></ion-icon>\n            {{eventProvider.listings[eventIter].shirt_size}}\n          </ion-item>\n          <ion-item text-wrap class="item item-trns" [hidden]="!eventProvider.listings[eventIter].register || eventProvider.listings[eventIter].display_accomodation_option == \'0\'">\n            <ion-icon name="home" item-start></ion-icon>\n            {{eventProvider.listings[eventIter].accomodation}}\n          </ion-item>\n        </ion-list>\n          <!-- <h2 text-uppercase>{{eventProvider.listings[eventIter].event_name}}</h2>\n          <div padding [innerHtml]="eventProvider.listings[eventIter].description">\n          </div>\n          \n          <div class="event-content">\n                {{eventProvider.listings[eventIter].start_date_time | date: \'MMM d, y, h:mm: a\'}} - \n  			      	{{eventProvider.listings[eventIter].start_date_time.getDate() == eventProvider.listings[eventIter].end_date_time.getDate() ? (eventProvider.listings[eventIter].end_date_time | date: \'MMM d, y, h:mm a\') : (eventProvider.listings[eventIter].end_date_time | date: \'h:mm a\') }}\n          </div>\n          <h5 text-uppercase>VENUE</h5>\n          <div class="event-content">\n                {{eventProvider.listings[eventIter].venue}}\n          </div>\n          <h5 text-uppercase [hidden]="!eventProvider.listings[eventIter].register">MY EVENT PERFERENCES</h5>\n          <div class="event-content" [hidden]="!eventProvider.listings[eventIter].register">\n                <p>Shirt Size: {{eventProvider.listings[eventIter].shirt_size}}</p>\n                <p>Meal Option: {{eventProvider.listings[eventIter].meal_option}}</p>\n          </div>\n          <div [hidden]="eventProvider.listings[eventIter].open_for_registration!= 1" padding>\n            <button ion-button block [style.background]="ff6961" [hidden]="eventProvider.listings[eventIter].register" (click)="register()">Register</button>\n            <button ion-button block [style.background]="ff6961" [hidden]="!eventProvider.listings[eventIter].register" (click)="update()">Change Perference</button>\n            <button ion-button block [style.background]="ff6961" [hidden]="!eventProvider.listings[eventIter].register" (click)="cancel()">Withdraw Registration</button> \n          </div> -->\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\event-detail\event-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_prulia_event_prulia_event__["a" /* PruliaEventProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], EventDetailPage);
    return EventDetailPage;
}());

//# sourceMappingURL=event-detail.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prulia_home_prulia_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_detail_home_detail__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, memberProvider, homeProvider, appEvent) {
        this.navCtrl = navCtrl;
        this.memberProvider = memberProvider;
        this.homeProvider = homeProvider;
        this.appEvent = appEvent;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        this.appEvent.publish('loading:start', 'Loading...');
        this.memberProvider.get_member_profile(true)
            .then(function (data) {
        }, (function (error) {
            console.log(error);
        }));
        this.homeProvider.get_home_listing(true)
            .then(function (data) {
            _this.appEvent.publish('loading:end');
        }, (function (error) {
            console.log(error);
        }));
    };
    HomePage.prototype.eventTapped = function (home_entry) {
        if (home_entry["type"] === "Content") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_detail_home_detail__["a" /* HomeDetailPage */], { entry_name: home_entry["name"] });
        }
        else {
            window.open(home_entry["link"], '_blank');
        }
        //
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\home\home.html"*/'<<!-- ion-header>\n  <ion-navbar>\n    <ion-title>PRULIA Member App</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="!memberProvider.member">Home</ion-title>\n    <ion-title *ngIf="memberProvider.member">Welcome Back {{memberProvider.member.full_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--<div *ngIf="memberProvider.member" padding class="welcome_member">-->\n    <!--<h1>Welcome Back {{memberProvider.member.full_name}}</h1>-->\n  <!--</div>-->\n\n  <!--<ion-list [virtualScroll]="homeProvider.home_entries" [hidden]="homeProvider.home_entries.length === 0">-->\n    <!--<ion-card *virtualItem="let home_entry" (click)="eventTapped(home_entry)" ion-item>-->\n      <!--<div class="home_background">-->\n      <!--</div>-->\n      <!--<div class="home_content" center>-->\n        <!--<h1 class="home_title">-->\n          <!--{{home_entry.title}}-->\n        <!--</h1>-->\n        <!--<div class="home_image">-->\n          <!--<img [src]="home_entry.image"/>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</ion-card>-->\n  <!--</ion-list>-->\n\n  <ion-list>\n    <ion-list-header [hidden]="homeProvider.home_entries.length > 0">No Home Content setup</ion-list-header>\n    <ion-card *ngFor="let home_entry of homeProvider.home_entries" (click)="eventTapped(home_entry)">\n      <ion-card-header>{{home_entry.title}}</ion-card-header>\n      <img [src]="home_entry.image"/>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prulia_home_prulia_home__["a" /* PruliaHomeProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_home_prulia_home__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeDetailPage = (function () {
    function HomeDetailPage(navCtrl, navParams, homeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeProvider = homeProvider;
        this.homeEntriesIter = 0;
    }
    HomeDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeDetailPage');
        for (var i = 0; i < this.homeProvider.home_entries.length; i++) {
            if (this.homeProvider.home_entries[i].name === this.navParams.get('entry_name')) {
                this.homeEntriesIter = i;
                break;
            }
            console.log(this.homeProvider.home_entries[this.homeEntriesIter]);
        }
    };
    HomeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-detail',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\home-detail\home-detail.html"*/'<!--\n  Generated template for the HomeDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{homeProvider.home_entries[homeEntriesIter].title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content" *ngIf="homeProvider.home_entries[homeEntriesIter]">\n      <!-- <div class="the-header">\n        <div class="background">\n          <div class="image_background" [ngStyle]="{\'background-image\': \'url(\' + bannerProvider.home_entries[homeEntriesIter].image +\')\'}">\n          </div>\n          <img [src]="bannerProvider.home_entries[homeEntriesIter].image"/>\n        </div>\n        <button ion-fab>\n          <ion-icon name="people"></ion-icon>\n        </button>\n      </div> -->\n<!--       <div class="the-content" padding >\n          <h1 class="newsletter_title">\n		      {{homeProvider.home_entries[homeEntriesIter].title}}\n	  		</h1>\n      </div> -->\n      <div padding [innerHtml]="homeProvider.home_entries[homeEntriesIter].content"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\home-detail\home-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_home_prulia_home__["a" /* PruliaHomeProvider */]])
    ], HomeDetailPage);
    return HomeDetailPage;
}());

//# sourceMappingURL=home-detail.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prulia_newsletter_prulia_newsletter__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newsletter_detail_newsletter_detail__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewsletterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsletterPage = (function () {
    function NewsletterPage(navCtrl, navParams, memberProvider, newsletterProvider, appEvent) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.memberProvider = memberProvider;
        this.newsletterProvider = newsletterProvider;
        this.appEvent = appEvent;
        this.queryText = "";
        this.appEvent.subscribe('newsletter:update', function (fnSuccess) { return _this._updateNewsletter(true, true, fnSuccess); });
    }
    NewsletterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsletterPage');
        this._updateNewsletter(false, false);
    };
    NewsletterPage.prototype.doRefresh = function (refresher) {
        this._updateNewsletter(true, false, (function (data) {
            refresher.complete();
        }), (function (data) {
            refresher.complete();
        }));
    };
    NewsletterPage.prototype.eventTapped = function (newsletter) {
        if (newsletter["type"] === "Content") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newsletter_detail_newsletter_detail__["a" /* NewsletterDetailPage */], { newsletter_name: newsletter['name'] });
        }
        else {
            window.open(newsletter["link"], '_blank');
        }
    };
    NewsletterPage.prototype._updateNewsletter = function (bRefresh, bFromModel, fnSuccess, fnError) {
        var _this = this;
        if (!bFromModel) {
            this.appEvent.publish('loading:start', 'Loading...');
        }
        this.newsletterProvider.get_newsletter_listing(true, this.queryText, this.memberProvider.member.name)
            .then(function (data) {
            if (fnSuccess) {
                fnSuccess();
            }
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }, (function (error) {
            if (fnError) {
                fnError();
            }
            console.log(error);
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }));
    };
    NewsletterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsletter',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\newsletter\newsletter.html"*/'<!--\n  Generated template for the NewsletterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Newsletter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="newsletter-page">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list [virtualScroll] = "newsletterProvider.newsletters"  [hidden]="newsletterProvider.newsletters.length === 0">\n      <ion-item *virtualItem="let newsletter" (click)="eventTapped(newsletter)" ion-item>\n        <ion-thumbnail item-start>\n        <ion-img [src]="newsletter.news_image"></ion-img>\n      </ion-thumbnail>\n        <h2 text-wrap>{{newsletter.title}}</h2>\n        <p>{{newsletter.publish_date | date: \'MMM d, y\'}}</p>\n      </ion-item>\n  </ion-list>\n\n  <ion-list-header [hidden]="newsletterProvider.newsletters.length > 0">\n      No Newsletter available\n  </ion-list-header>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\newsletter\newsletter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prulia_newsletter_prulia_newsletter__["a" /* PruliaNewsletterProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */]])
    ], NewsletterPage);
    return NewsletterPage;
}());

//# sourceMappingURL=newsletter.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_newsletter_prulia_newsletter__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewsletterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsletterDetailPage = (function () {
    function NewsletterDetailPage(navCtrl, navParams, newsletterProvider, plt, renderer, elRef, appEvent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsletterProvider = newsletterProvider;
        this.plt = plt;
        this.renderer = renderer;
        this.elRef = elRef;
        this.appEvent = appEvent;
        this.newsletterIter = 0;
    }
    NewsletterDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsletterDetailPage');
        for (var i = 0; i < this.newsletterProvider.newsletters.length; i++) {
            if (this.newsletterProvider.newsletters[i].name === this.navParams.get('newsletter_name')) {
                this.newsletterIter = i;
                break;
            }
            console.log(this.newsletterProvider.newsletters[this.newsletterIter]);
        }
    };
    NewsletterDetailPage.prototype.ionViewDidEnter = function () {
        this.appEvent.publish('loading:start', 'loading...');
        // if(this.plt.is('ios')){
        var links = this.elRef.nativeElement.querySelectorAll('a');
        links.forEach(function (element) {
            this.renderer.listen(element, 'tap', function (evt) {
                // console.log();
                // evt.stopPropagation();
                window.open(element.getAttribute('href'), '_system');
                return false;
            });
        }, this);
        // }
        this.appEvent.publish('loading:end');
    };
    NewsletterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsletter-detail',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\newsletter-detail\newsletter-detail.html"*/'<!--\n  Generated template for the NewsletterDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title *ngIf="newsletterProvider.newsletters[newsletterIter]" text-uppercase>{{newsletterProvider.newsletters[newsletterIter].title}}</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content>\n	<div class="newsletter_image">\n		<img [src]="newsletterProvider.newsletters[newsletterIter].news_image"  />\n	</div>\n	<div class="newsletter_content" padding>\n		<h1 class="newsletter_title">\n	      {{newsletterProvider.newsletters[newsletterIter].title}}\n  		</h1>\n  		<p class="newsletter_date">{{newsletterProvider.newsletters[newsletterIter].publish_date | date: \'MMM d, y\'}} </p>\n  </div>\n  <div padding [innerHtml]="newsletterProvider.newsletters[newsletterIter].content"></div>\n</ion-content> -->\n\n<ion-content>\n  <div class="content" *ngIf="newsletterProvider.newsletters[newsletterIter]">\n      <div class="the-header">\n        <div class="background">\n          <div class="image_background" [ngStyle]="{\'background-image\': \'url(\' + newsletterProvider.newsletters[newsletterIter].news_image +\')\'}">\n          </div>\n          <img [src]="newsletterProvider.newsletters[newsletterIter].news_image"/>\n        </div>\n        <button ion-fab>\n          <ion-icon name="desktop"></ion-icon>\n        </button>\n      </div>\n      <div class="the-content" padding >\n          <h1 class="newsletter_title">\n		      {{newsletterProvider.newsletters[newsletterIter].title}}\n	  		</h1>\n	  		<p class="newsletter_date">{{newsletterProvider.newsletters[newsletterIter].publish_date | date: \'MMM d, y\'}} </p>\n      </div>\n      <div padding [innerHtml]="newsletterProvider.newsletters[newsletterIter].content"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\newsletter-detail\newsletter-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_newsletter_prulia_newsletter__["a" /* PruliaNewsletterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
    ], NewsletterDetailPage);
    return NewsletterDetailPage;
}());

//# sourceMappingURL=newsletter-detail.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_banner_prulia_banner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partner_detail_partner_detail__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartnerPage = (function () {
    function PartnerPage(navCtrl, navParams, bannerProvider, appEvent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bannerProvider = bannerProvider;
        this.appEvent = appEvent;
    }
    PartnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnerPage');
        this._updatePartner(false, false);
    };
    PartnerPage.prototype.doRefresh = function (refresher) {
        this._updatePartner(true, false, (function (data) {
            refresher.complete();
        }), (function (data) {
            refresher.complete();
        }));
    };
    PartnerPage.prototype.eventTapped = function (partner) {
        if (partner["type"] === "Content") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__partner_detail_partner_detail__["a" /* PartnerDetailPage */], { partner_name: partner['name'] });
        }
        else {
            window.open(partner["link"], '_blank');
        }
    };
    PartnerPage.prototype._updatePartner = function (bRefresh, bFromModel, fnSuccess, fnError) {
        var _this = this;
        if (!bFromModel) {
            this.appEvent.publish('loading:start', 'Loading...');
        }
        this.bannerProvider.get_banner(bRefresh)
            .then(function (data) {
            if (fnSuccess) {
                fnSuccess();
            }
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }, (function (error) {
            if (fnError) {
                fnError();
            }
            console.log(error);
            if (!bFromModel) {
                _this.appEvent.publish('loading:end');
            }
        }));
    };
    PartnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partner',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\partner\partner.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Partner</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="partner-page">\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher>\n\n	<ion-list [virtualScroll] = "bannerProvider.banners" [hidden]="bannerProvider.banners.length === 0">\n\n		<ion-card *virtualItem="let banner" (click)="eventTapped(banner)" ion-item>\n	        <div class="partner_background" [ngStyle]="{\'background-image\': \'url(\' + banner.image +\')\'}">\n	        </div>\n	        <div class="partner_content">\n	          <div class="partner_image">\n	            <img [src]="banner.image"  />\n	          </div>\n	          \n	        </div>\n	        <h1 class="partner_title">\n	              {{banner.banner_name}}\n	          </h1>\n		</ion-card>\n\n	</ion-list>\n\n	<ion-list-header [hidden]="bannerProvider.banners.length > 0">\n		No Partners offer found\n	</ion-list-header>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\partner\partner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_banner_prulia_banner__["a" /* PruliaBannerProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
    ], PartnerPage);
    return PartnerPage;
}());

//# sourceMappingURL=partner.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prulia_banner_prulia_banner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PartnerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartnerDetailPage = (function () {
    function PartnerDetailPage(navCtrl, navParams, bannerProvider, renderer, plt, elRef, appEvent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bannerProvider = bannerProvider;
        this.renderer = renderer;
        this.plt = plt;
        this.elRef = elRef;
        this.appEvent = appEvent;
        this.bannerIter = 0;
    }
    PartnerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnerDetailPage');
        for (var i = 0; i < this.bannerProvider.banners.length; i++) {
            debugger;
            if (this.bannerProvider.banners[i].name === this.navParams.get('partner_name')) {
                this.bannerIter = i;
                break;
            }
            console.log(this.bannerProvider.banners[this.bannerIter]);
        }
    };
    PartnerDetailPage.prototype.ionViewDidEnter = function () {
        this.appEvent.publish('loading:start', 'loading...');
        // if(this.plt.is('ios')){
        var links = this.elRef.nativeElement.querySelectorAll('a');
        links.forEach(function (element) {
            this.renderer.listen(element, 'tap', function (evt) {
                // console.log();
                // evt.stopPropagation();
                window.open(element.getAttribute('href'), '_system');
                return false;
            });
        }, this);
        // }
        this.appEvent.publish('loading:end');
    };
    PartnerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partner-detail',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\partner-detail\partner-detail.html"*/'<!--\n  Generated template for the PartnerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <ion-title>PartnerDetail</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="content" *ngIf="bannerProvider.banners[bannerIter]">\n      <div class="the-header">\n        <div class="background">\n          <div class="image_background" [ngStyle]="{\'background-image\': \'url(\' + bannerProvider.banners[bannerIter].image +\')\'}">\n          </div>\n          <img [src]="bannerProvider.banners[bannerIter].image"/>\n        </div>\n        <button ion-fab>\n          <ion-icon name="people"></ion-icon>\n        </button>\n      </div>\n      <div class="the-content" padding >\n          <h1 class="newsletter_title">\n		      {{bannerProvider.banners[bannerIter].banner_name}}\n	  		</h1>\n      </div>\n      <div padding [innerHtml]="bannerProvider.banners[bannerIter].content"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\partner-detail\partner-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prulia_banner_prulia_banner__["a" /* PruliaBannerProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
    ], PartnerDetailPage);
    return PartnerDetailPage;
}());

//# sourceMappingURL=partner-detail.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, iab, auth, alertCtrl, toastCtrl, events, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.common = common;
    }
    LoginPage.prototype.openRegistrationPage = function () {
        var browser = this.iab.create(this.common.get_api_url('/member-registration'), '_blank', 'location=no');
        browser.on("loadstop")
            .subscribe(function (evt) {
            if (evt.url.match("registration-complete")) {
                browser.close();
            }
        }, function (err) {
            console.log("InAppBrowser loadstop Event Error: " + err);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.events.publish('loading:start', 'Authenticating...');
        this.auth.login(this.username.value, this.password.value)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            _this.events.publish('loading:end');
        }, (function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Login Unsuccessful',
                message: 'The username or password you entered is incorrect',
                buttons: ['OK']
            });
            _this.events.publish('loading:end');
            alert.present();
        }));
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.alertCtrl.create({
            title: 'Forgot Password?',
            message: "Enter your Agent ID and NRIC Number so we can send you temporary password.",
            inputs: [
                {
                    name: 'prulia_id',
                    placeholder: 'Agent ID (eg: 1234567)',
                    type: 'string'
                }, {
                    name: 'nric_id',
                    placeholder: 'NRIC Number (eg: xxxx-xx-xxxx)',
                    type: 'integer'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        _this.events.publish('loading:start', 'Validating...');
                        _this.auth.forget_password(data.prulia_id, data.nric_id)
                            .then(function (data) {
                            if (data['message'].indexOf('not found') >= 0) {
                                var alert_1 = _this.alertCtrl.create({
                                    title: "Error",
                                    message: "Noticed that you are new in PRULIA, please click OK to proceed with membership registration",
                                    buttons: [{
                                            text: 'OK',
                                            handler: function () {
                                                console.log('No User Found OK clicked');
                                                alert_1.dismiss();
                                                _this.openRegistrationPage();
                                            }
                                        }, {
                                            text: 'Cancel',
                                            handler: function () {
                                                console.log('No User Found Cancel clicked');
                                                // alert.dismiss();
                                            }
                                        }]
                                });
                                _this.events.publish('loading:end');
                                alert_1.present();
                            }
                            else if (data['message'].indexOf('temporary login credential') < 0) {
                                var alert_2 = _this.alertCtrl.create({
                                    title: "Error",
                                    message: data['message'],
                                    buttons: ['OK']
                                });
                                _this.events.publish('loading:end');
                                alert_2.present();
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: data['message'],
                                    duration: 10000,
                                    position: 'bottom',
                                    cssClass: 'dark-trans',
                                    closeButtonText: 'OK',
                                    showCloseButton: true
                                });
                                _this.events.publish('loading:end');
                                toast.present();
                            }
                        }, (function (error) {
                            console.log(error);
                            // let error_message = "";
                            // if(error.error._server_messages !== undefined){
                            // 	if(JSON.parse(error.error._server_messages)!==undefined){
                            // 		let oError = JSON.parse(error.error._server_messages);
                            // 		console.log(oError);
                            // 		if(oError!=undefined){
                            // 			error_message = "";
                            // 		}
                            // 		oError.forEach( (element) => {
                            // 			let oElement = JSON.parse(element);
                            // 		    error_message += oElement.message;
                            // 		});
                            // 	}
                            // }
                            // if(error_message == ""){
                            // 	error_message = "Unable to send out email";
                            // }
                            // if(error_message.indexOf('not found') >= 0){
                            var notFoundAlert = _this.alertCtrl.create({
                                title: "Error",
                                message: "Noticed that you are new in PRULIA, please click OK to proceed with membership registration",
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            console.log('No User Found OK clicked');
                                            notFoundAlert.dismiss();
                                            _this.openRegistrationPage();
                                        }
                                    }, {
                                        text: 'Cancel',
                                        handler: function () {
                                            console.log('No User Found Cancel clicked');
                                            // notFoundAlert.dismiss();
                                        }
                                    }]
                            });
                            _this.events.publish('loading:end');
                            notFoundAlert.present();
                            //    		} else {
                            //    			let errorAlert = this.alertCtrl.create({
                            //   title: 'Error',
                            //   message: error_message,
                            //   buttons: ['OK']
                            // });
                            // this.events.publish('loading:end');
                            // errorAlert.present();
                            //    		}
                        }));
                    }
                }
            ]
        });
        //  let forgot = this.alertCtrl.create({
        //    title: 'Forgot Password?',
        //    message: "Enter you email address so we can send you a link to reset your password.",
        //    inputs: [
        //      {
        //        name: 'email',
        //        placeholder: 'Email',
        //        type: 'email'
        //      },
        //    ],
        //    buttons: [
        //      {
        //        text: 'Cancel',
        //        handler: data => {
        //          console.log('Cancel clicked');
        //        }
        //      },
        //      {
        //        text: 'Send',
        //        handler: data => {
        //          console.log('Send clicked');
        //          this.events.publish('loading:start', 'Validating...');
        //          this.auth.reset_password(data.email)
        //          	.then(data => {
        //          		if(data['message']==='not found'){
        //          			let alert = this.alertCtrl.create({
        // 					      title: "Error",
        // 					      message:"Unable to find user with the provided email",
        // 					      buttons: ['OK']
        // 					    });
        // 		    this.events.publish('loading:end');
        // 		    alert.present();
        //          		} else {
        //          			let toast = this.toastCtrl.create({
        // 		              message: data['message'] ,
        // 		              duration: 3000,
        // 		              position: 'bottom',
        // 		              cssClass: 'dark-trans',
        // 		              closeButtonText: 'OK',
        // 		              showCloseButton: true
        // 		            });
        //          			this.events.publish('loading:end');
        //          			toast.present();
        //          		}
        // 	},(error => {
        // 		console.log(error)
        // 		let alert = this.alertCtrl.create({
        // 	      title: 'Unable to send out email',
        // 	      message: 'Error Occured',
        // 	      buttons: ['OK']
        // 	    });
        // 	    this.events.publish('loading:end');
        // 	    alert.present();
        // 	})
        // )
        //        }
        //      }
        //    ]
        //  });
        forgot.present();
    };
    LoginPage.prototype.firstLogin = function () {
        var _this = this;
        var forgot = this.alertCtrl.create({
            title: 'First Time Login',
            message: "Enter your details so we can send you a link to reset your password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        _this.events.publish('loading:start', 'Validating...');
                        _this.auth.reset_password(data.email)
                            .then(function (data) {
                            if (data['message'] === 'not found') {
                                var alert_3 = _this.alertCtrl.create({
                                    title: "Error",
                                    message: "Unable to find user with the provided email",
                                    buttons: ['OK']
                                });
                                _this.events.publish('loading:end');
                                alert_3.present();
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: data['message'],
                                    duration: 15000,
                                    position: 'bottom',
                                    cssClass: 'dark-trans',
                                    closeButtonText: 'OK',
                                    showCloseButton: true
                                });
                                _this.events.publish('loading:end');
                                toast.present();
                            }
                        }, (function (error) {
                            console.log(error);
                            var alert = _this.alertCtrl.create({
                                title: 'Unable to send out email',
                                message: 'Error Occured',
                                buttons: ['OK']
                            });
                            _this.events.publish('loading:end');
                            alert.present();
                        }));
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="animated fadeIn login auth-page">\n  <div padding class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h5 ion-text class="title-secondary title">\n        PRULIA Membership App\n      </h5>\n    </div>\n    <br/>\n    <!-- Login form -->\n    <form class="list-form" inset>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="title-secondary"></ion-icon>\n          Agent ID\n        </ion-label>\n        <ion-input type="text" required #username></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="title-secondary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" required #password></ion-input>\n      </ion-item>\n    </form>\n    <p><br/></p>\n\n    <!-- <p text-right ion-text color="dark" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n\n    <div>\n      <button ion-button icon-start block color="secondary" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n\n      <button ion-button icon-start block color="primary" outline tappable (click)="forgotPass()">\n        First &amp; Forgot Password?\n      </button>\n\n      <!-- <button ion-button icon-start block color="primary" clear tappable (click)="openRegistrationPage()">\n        New here? &nbsp; <strong> Sign up</strong>\n      </button> -->\n\n    </div>\n\n\n    <!-- Other links -->\n    <!-- <div text-center margin-top>\n      <span ion-text color="dark" tappable (click)="openRegistrationPage()">New here? <strong>Sign up</strong></span>\n    </div> -->\n\n  </div>\n  <!-- <form (ngSubmit)="loginUser()" class="loginsection">\n        <img src="assets/imgs/Prulia-word-logo.png" style="display: block; width: 90%; height: auto; margin-left: auto; margin-right: auto;">\n        <ion-list>\n            <ion-item>\n                <ion-input type="text" [(ngModel)]="login.username" name="name" placeholder="Username" ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="password" [(ngModel)]="login.password" name="password" placeholder="Password"></ion-input>\n              </ion-item>\n        </ion-list>\n        <div class="spacer" style="height: 2em;"></div>\n        <button ion-button block color="primary" type="submit">Log in</button>\n    </form>\n    <button class="bottom" ion-button clear full color="primary" (click)="openRegistrationPage()" >Don\'t have an account? Sign up</button>  -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruliaMemberProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruliaMemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruliaMemberProvider = (function () {
    function PruliaMemberProvider(http, common) {
        this.http = http;
        this.common = common;
        console.log('Hello PruliaMemberProvider Provider');
    }
    PruliaMemberProvider.prototype.get_member_profile = function (bForceRefresh) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (bForceRefresh || that.member === undefined) {
                that._load_member_profile(function () {
                    resolve(that.member);
                }, function () {
                    reject("Unable to retrieve the information");
                });
            }
            else {
                resolve(that.member);
            }
        });
    };
    PruliaMemberProvider.prototype._load_member_profile = function (fnSuccess, fnError) {
        var _this = this;
        this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.mobile_member_login'), { withCredentials: true })
            .subscribe(function (res) {
            _this.member = res['message'];
            if (_this.member.profile_photo !== undefined && _this.member.profile_photo !== "") {
                _this.member.profile_photo = _this.common.get_service_endpoint() + _this.member.profile_photo;
            }
            else {
                _this.member.profile_photo = "../www/assets/imgs/avatar_placeholder-1.png";
            }
            console.log(_this.member);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError();
        });
    };
    PruliaMemberProvider.prototype.post_member_profile = function (data, fnSuccess, fnError) {
        var _this = this;
        this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.update_member_pref'), JSON.stringify(data), { withCredentials: true })
            .subscribe(function (res) {
            _this.member = res['message'];
            if (_this.member.profile_photo !== "") {
                _this.member.profile_photo = _this.common.get_service_endpoint() + _this.member.profile_photo;
            }
            else {
                _this.member.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
            }
            console.log(_this.member);
            fnSuccess(_this.member);
        }, function (err) {
            console.log(err);
            fnError(err);
        });
    };
    PruliaMemberProvider.prototype.post_member_picture = function (data, fnSuccess, fnError) {
        var _this = this;
        var member = this.member;
        data.filename = member.name + '_' + data.filename;
        data = Object.assign(data, {
            from_form: 1,
            is_private: 0,
            cmd: 'uploadfile',
            doctype: 'PRULIA Member',
            docname: member.name,
        });
        this.http.post(this.common.get_api_url(''), urlEncode(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            withCredentials: true
        })
            .subscribe(function (res) {
            var msg = res['message'] || {};
            _this.member.profile_photo = msg.file_url;
            _this.post_member_profile(_this.member, fnSuccess, fnError);
        }, function (err) {
            console.log(err);
            fnError(err);
        });
        function urlEncode(obj) {
            var str = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
                }
            }
            return str.join("&");
        }
    };
    PruliaMemberProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */]])
    ], PruliaMemberProvider);
    return PruliaMemberProvider;
}());

//# sourceMappingURL=prulia-member.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_detail_home_detail__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_member_detail_member_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_event_pref_event_pref__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_member_info_member_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_update_password_update_password__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_event__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_detail_event_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsletter__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_newsletter_detail_newsletter_detail__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_partner_partner__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_partner_detail_partner_detail__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_common_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_prulia_member_prulia_member__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_navigation_navigation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_prulia_event_prulia_event__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_prulia_newsletter_prulia_newsletter__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_accordion_accordion__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_prulia_banner_prulia_banner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_prulia_home_prulia_home__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_detail_home_detail__["a" /* HomeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_pref_event_pref__["a" /* EventPrefPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_member_info_member_info__["a" /* MemberInfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_update_password_update_password__["a" /* UpdatePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_detail_event_detail__["a" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsletter__["a" /* NewsletterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_newsletter_detail_newsletter_detail__["a" /* NewsletterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_partner_detail_partner_detail__["a" /* PartnerDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_detail_home_detail__["a" /* HomeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_member_detail_member_detail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_pref_event_pref__["a" /* EventPrefPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_member_info_member_info__["a" /* MemberInfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_update_password_update_password__["a" /* UpdatePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_detail_event_detail__["a" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsletter__["a" /* NewsletterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_newsletter_detail_newsletter_detail__["a" /* NewsletterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_partner_detail_partner_detail__["a" /* PartnerDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_prulia_member_prulia_member__["a" /* PruliaMemberProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_navigation_navigation__["a" /* NavigationProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_prulia_event_prulia_event__["a" /* PruliaEventProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_prulia_newsletter_prulia_newsletter__["a" /* PruliaNewsletterProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_prulia_banner_prulia_banner__["a" /* PruliaBannerProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_prulia_home_prulia_home__["a" /* PruliaHomeProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = (function () {
    function CommonProvider(http) {
        this.http = http;
        console.log('Hello CommonProvider Provider');
    }
    CommonProvider.prototype.getCookies = function (source) {
        var c = source || document.cookie, v = 0, cookies = {};
        if (document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)) {
            c = RegExp.$1;
            v = 1;
        }
        if (v === 0) {
            c.split(/[,;]/).map(function (cookie) {
                var parts = cookie.split(/=/, 2), name = decodeURIComponent(parts[0].trimLeft()), value = parts.length > 1 ? decodeURIComponent(parts[1].trimRight()) : null;
                if (value && value.charAt(0) === '"') {
                    value = value.substr(1, value.length - 2);
                }
                cookies[name] = value;
            });
        }
        else {
            c.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map(function ($0, $1) {
                var name = $0, value = $1.charAt(0) === '"'
                    ? $1.substr(1, -1).replace(/\\(.)/g, "$1")
                    : $1;
                cookies[name] = value;
            });
        }
        return cookies;
    };
    CommonProvider.prototype.get_api_url = function (URL) {
        return this.get_service_endpoint() + URL;
    };
    CommonProvider.prototype.get_service_endpoint = function () {
        return "http://167.99.77.197:8000";
        // return "http://103.253.146.122";
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_navigation_navigation__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, auth, navigation, events, loadingCtrl) {
        var _this = this;
        this.navigation = navigation;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.presentLoading("Loading...");
            // const args = ['GET', 'http://103.253.146.122'];
            var args = ['GET', 'http://167.99.77.197:8000'];
            cordova.exec(null, null, 'WKWebViewSyncCookies', 'sync', args);
            // WKWebViewSync.sync(args);
            if (localStorage.session_id) {
                auth.set_sid_cookie();
                auth.if_session_valid().then(function (data) {
                    // if (data['message'] === "pong") {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                    // } else {
                    //   this.rootPage = LoginPage
                    // }
                }, (function (err) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                }));
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
            }
            _this.dismissLoading();
            _this.events.subscribe('navigate:logout', function (page) { return _this.logoutUser(page); });
            _this.events.subscribe('loading:start', function (content) { return _this.presentLoading(content); });
            _this.events.subscribe('loading:end', function (content) { return _this.dismissLoading(); });
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.navigation.initRootNav(this.rootNav);
    };
    MyApp.prototype.logoutUser = function (page) {
        this.rootNav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'back' });
    };
    MyApp.prototype.presentLoading = function (content) {
        this.loader = this.loadingCtrl.create({
            content: content
        });
        this.loader.present();
    };
    MyApp.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "rootNav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_navigation_navigation__["a" /* NavigationProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionComponent = (function () {
    function AccordionComponent(renderer) {
        this.renderer = renderer;
        this.accordionExapanded = false;
        this.expandable = true;
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
        // this._setMaxHeight(this.accordionExapanded);
        console.log(this.cardContent.nativeElement);
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        this.accordionExapanded = !this.accordionExapanded;
        // this._setMaxHeight(this.accordionExapanded)
        // if (this.accordionExapanded) {
        //   this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        //   this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        // } else {
        //   this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
        //   this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "accordionExapanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expandable'),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "expandable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('icon'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "icon", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion',template:/*ion-inline-start:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\components\accordion\accordion.html"*/'<!-- Generated template for the AccordionComponent component -->\n<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    <ion-list>\n      <ion-item color="primary">\n        <button ion-button  icon-only item-right color="primary">\n          <ion-icon color="light" [name]="!this.icon ? this.accordionExapanded === true ? \'close\' : \'add\' : this.icon"></ion-icon>\n        </button>\n        {{ title }}\n      </ion-item>\n    </ion-list>\n  </ion-card-header>\n  <ion-card-content #cc [class]="this.expandable && this.accordionExapanded === true ? \'showAccordion\' : \'hideAccordion\'">\n    <ng-content></ng-content>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\Users\neel\Desktop\Projects\erpx_mobile\src\components\accordion\accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_navigation_navigation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, common, navigation, toastCtrl) {
        this.http = http;
        this.common = common;
        this.navigation = navigation;
        this.toastCtrl = toastCtrl;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function (username, password) {
        var _this = this;
        var credentials = { usr: username, pwd: password, device: "mobile" };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.common.get_api_url('/api/method/login'), credentials, {
                observe: 'response',
                withCredentials: true
            })
                .subscribe(function (res) {
                debugger;
                // if(document.cookie !== ""){
                localStorage.user = username;
                var cookie = _this.common.getCookies(document.cookie);
                localStorage.session_id = cookie["sid"];
                resolve(res.body);
                // } else {
                //   this.login(username, password).then(data => {
                //     resolve(data);
                //   },(error => {
                //     reject(error);
                //   })
                // }
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.logout = function () {
        localStorage.clear();
        this.navigation.userLogout();
        var toast = this.toastCtrl.create({
            message: 'Logout successfully',
            position: 'bottom',
            duration: 10000,
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    AuthServiceProvider.prototype.if_session_valid = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.common.get_api_url('/api/method/frappe.auth.get_logged_user'), {
                observe: 'response',
                withCredentials: true
            })
                .subscribe(function (res) {
                resolve(res.body);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.reset_password = function (email) {
        var _this = this;
        var data = { user: email };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.common.get_api_url('/api/method/frappe.core.doctype.user.user.reset_password'), data, {
                observe: 'response',
                withCredentials: true
            })
                .subscribe(function (res) {
                resolve(res.body);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.forget_password = function (prulia_id, nric_number) {
        var _this = this;
        var data = { prulia_id: prulia_id, nric_number: nric_number };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.common.get_api_url('/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.forget_password'), data, {
                observe: 'response',
                withCredentials: true
            })
                .subscribe(function (res) {
                resolve(res.body);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.update_password = function (old_password, new_password, fnSuccess, fnError) {
        var data = {
            old_password: old_password,
            new_password: new_password,
            logout_all_sessions: false
        };
        this.http.post(this.common.get_api_url('/api/method/frappe.core.doctype.user.user.update_password'), data, { withCredentials: true })
            .subscribe(function (res) {
            fnSuccess(res['message']);
        }, function (err) {
            fnError(err);
        });
    };
    AuthServiceProvider.prototype.set_sid_cookie = function () {
        console.log("Session ID found", localStorage.session_id);
        document.cookie = "sid=" + localStorage.session_id +
            "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_navigation_navigation__["a" /* NavigationProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruliaEventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruliaEventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruliaEventProvider = (function () {
    function PruliaEventProvider(http, common) {
        this.http = http;
        this.common = common;
        this.listings = [];
        console.log('Hello PruliaEventProvider Provider');
    }
    PruliaEventProvider.prototype.get_event_listing = function (bForceRefresh, queryWords, member_name) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (bForceRefresh || that.listings.length < 1) {
                that._load_event_listing(member_name, function () {
                    resolve(that.listings);
                }, function () {
                    reject("Unable to retrieve the information");
                });
            }
            else {
                resolve(that.listings);
            }
        });
    };
    PruliaEventProvider.prototype._load_event_listing = function (member_name, fnSuccess, fnError) {
        var _this = this;
        this.http.get(this.common.get_api_url('/api/method/erpx_prulia.prulia_events.doctype.prulia_event.prulia_event.get_event_list'), {
            withCredentials: true,
            params: { member_name: member_name }
        })
            .subscribe(function (res) {
            if (res['message'] instanceof Array) {
                _this.listings = res['message'];
            }
            else {
                _this.listings = [];
            }
            for (var _i = 0, _a = _this.listings; _i < _a.length; _i++) {
                var list = _a[_i];
                // console.log(entry); // 1, "string", false
                if (!list['event_image']) {
                    list['event_image'] = "../www/assets/imgs/Prulia-word-logo.png";
                }
                else {
                    list['event_image'] = _this.common.get_service_endpoint() + list['event_image'];
                }
                list['start_date_time'] = new Date(list['start_date_time'].replace(' ', 'T') + '+08:00');
                list['end_date_time'] = new Date(list['end_date_time'].replace(' ', 'T') + '+08:00');
            }
            // if(this.events.profile_photo !== ""){
            //   this.events.profile_photo = this.common.get_service_endpoint() + this.events.profile_photo;
            // } else {
            //   this.events.profile_photo = "../../assets/imgs/avatar_placeholder-1.png";
            // }
            console.log(_this.listings);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError();
        });
    };
    PruliaEventProvider.prototype.update_event_registration = function (data, fnSuccess, fnError) {
        this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_events.doctype.prulia_event.prulia_event.update_event_attendee'), JSON.stringify(data), { withCredentials: true })
            .subscribe(function (res) {
            console.log(res['message']);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError(err);
        });
    };
    PruliaEventProvider.prototype.create_event_registration = function (data, fnSuccess, fnError) {
        this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_events.doctype.prulia_event.prulia_event.add_attendance'), data, { withCredentials: true })
            .subscribe(function (res) {
            console.log(res['_server_message']);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError(err);
        });
    };
    PruliaEventProvider.prototype.withdraw_event_registration = function (data, fnSuccess, fnError) {
        this.http.post(this.common.get_api_url('/api/method/erpx_prulia.prulia_events.doctype.prulia_event.prulia_event.del_attendance'), data, { withCredentials: true })
            .subscribe(function (res) {
            console.log(res['message']);
            fnSuccess();
        }, function (err) {
            console.log(err);
            fnError(err);
        });
    };
    PruliaEventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* CommonProvider */]])
    ], PruliaEventProvider);
    return PruliaEventProvider;
}());

//# sourceMappingURL=prulia-event.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map