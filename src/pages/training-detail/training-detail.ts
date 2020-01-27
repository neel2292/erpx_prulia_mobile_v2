import {Component, ElementRef, Renderer} from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, NavParams, Platform } from 'ionic-angular';
import { EventPrefPage } from "../event-pref/event-pref";
import { PruliaMemberProvider } from "../../providers/prulia-member/prulia-member";
import { PruliaTrainingProvider } from "../../providers/prulia-training/prulia-training";
import { Events } from "ionic-angular/util/events";

/**
 * Generated class for the TrainingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-training-detail',
  templateUrl: 'training-detail.html',
})
export class TrainingDetailPage {

  eventIter : any = 0;
  qr_content: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public trainingProvider: PruliaTrainingProvider, public memberProvider: PruliaMemberProvider,
              public alertCtrl: AlertController, public appEvent: Events, public toastCtrl: ToastController,
              public renderer: Renderer, private elRef: ElementRef, public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingDetailPage');
    for(let i = 0; i < this.trainingProvider.listings.length; i++){
      if(this.trainingProvider.listings[i].name === this.navParams.get('training_name')){
        this.eventIter = i;
        this.qr_content = [
          this.trainingProvider.listings[i].name,
          this.memberProvider.member.name,
          this.memberProvider.member.agency_no
        ].join('/');
        break;
      }

      console.log(this.trainingProvider.listings[this.eventIter]);
    }
  }

  ionViewDidEnter(){
    this.appEvent.publish('loading:start', 'loading...');
    // if(this.plt.is('ios')){
    let links = this.elRef.nativeElement.querySelectorAll('a');
    links.forEach(function(element) {
      this.renderer.listen(element, 'tap', (evt) => {
        // console.log();
        // evt.stopPropagation();
        window.open(element.getAttribute('href'),'_system');
        return false;
      })
    }, this);
    // }
    this.appEvent.publish('loading:end');
  }

  register(){
    let tempEvent = Object.assign({}, this.trainingProvider.listings[this.eventIter]);
    tempEvent.meal_option = this.memberProvider.member.meal_option;
    if(tempEvent.display_shirt_option == 1){
      tempEvent.shirt_size = this.memberProvider.member.shirt_size;
    }
    if(tempEvent.display_accomodation_option == 1){
      tempEvent.accomodation = "Yes";
    }
    let myModal = this.modalCtrl.create(EventPrefPage, { 'value': tempEvent, mode: 'New' });
    myModal.present();
  }

  update(){
    let myModal = this.modalCtrl.create(EventPrefPage, { 'value': this.trainingProvider.listings[this.eventIter], mode: 'Update' });
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
            this.trainingProvider.withdraw_training_registration({
              member: this.memberProvider.member.prudential_id,
              event: this.trainingProvider.listings[this.eventIter].name
            }, function(){
              let toast = that.toastCtrl.create({
                message: 'Your registration was withdraw successfully',
                duration: 10000,
                showCloseButton: true,
                closeButtonText: 'OK',
                position: 'bottom'
              });
              that.appEvent.publish('event:update', function(){
                that.appEvent.publish('loading:end');
                toast.present();
              });

            }, function(error){
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
}
