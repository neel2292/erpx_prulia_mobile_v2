import {Component, Renderer, ElementRef} from '@angular/core';
import {NavController, ModalController, AlertController, ToastController, NavParams, Platform} from 'ionic-angular';
import {EventPrefPage} from '../event-pref/event-pref';
import {PruliaMemberProvider} from '../../providers/prulia-member/prulia-member';
import {PruliaEventProvider} from '../../providers/prulia-event/prulia-event';
import {Events} from 'ionic-angular/util/events';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  eventIter: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public eventProvider: PruliaEventProvider, public memberProvider: PruliaMemberProvider, public alertCtrl: AlertController,
              public appEvent: Events, public toastCtrl: ToastController, public renderer: Renderer, private elRef: ElementRef, public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
    for (let i = 0; i < this.eventProvider.listings.length; i++) {
      if (this.eventProvider.listings[i].name === this.navParams.get('event_name')) {
        this.eventIter = i;
        break;
      }

      console.log(this.eventProvider.listings[this.eventIter]);
    }
  }

  ionViewDidEnter() {
    this.appEvent.publish('loading:start', 'loading...');
    // if(this.plt.is('ios')){
    let links = this.elRef.nativeElement.querySelectorAll('a');
    links.forEach(function (element) {
      this.renderer.listen(element, 'tap', (evt) => {
        // console.log();
        // evt.stopPropagation();
        window.open(element.getAttribute('href'), '_system');
        return false;
      })
    }, this);
    // }
    this.appEvent.publish('loading:end');
  }

  register() {
    let tempEvent = Object.assign({}, this.eventProvider.listings[this.eventIter]);
    tempEvent.meal_option = this.memberProvider.member.meal_option;
    if (tempEvent.display_shirt_option == 1) {
      tempEvent.shirt_size = this.memberProvider.member.shirt_size;
    }
    if (tempEvent.display_accomodation_option == 1) {
      tempEvent.accomodation = "Yes";
    }
    let myModal = this.modalCtrl.create(EventPrefPage, {'value': tempEvent, mode: 'New'});
    myModal.present();
  }

  update() {
    let myModal = this.modalCtrl.create(EventPrefPage, {
      'value': this.eventProvider.listings[this.eventIter],
      mode: 'Update'
    });
    myModal.present();
  }

  cancel() {
    let that = this;
    let confirm = this.alertCtrl.create({
      title: 'Withdraw Confirmation',
      message: 'Are you sure you want to withdraw your registration?',
      buttons: [
        {
          text: 'Withdraw',
          handler: () => {
            console.log('Withdraw clicked');
            this.appEvent.publish('loading:start', 'Cancelling...');
            this.eventProvider.withdraw_event_registration({
              member: this.memberProvider.member.prudential_id,
              event: this.eventProvider.listings[this.eventIter].name
            }, function () {
              let toast = that.toastCtrl.create({
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
              let alert = that.alertCtrl.create({
                title: 'Error',
                subTitle: 'Error in update',
                buttons: ['Dismiss']
              });
              that.appEvent.publish('loading:end');
              alert.present();
              console.log(error)
            })
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();

  }

  // _updateEventDetails(){
  //   for(let event of this.eventProvider.events){
  //     if(this.event.name === event.name){
  //       this.event = event;
  //     }
  //   }
  // }

}
