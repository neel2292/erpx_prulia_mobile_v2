import { Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { PruliaMemberProvider } from "../../providers/prulia-member/prulia-member";
import { PruliaEventProvider } from '../../providers/prulia-event/prulia-event';
import { EventDetailPage } from "../event-detail/event-detail"; 
import { Events } from 'ionic-angular/util/events';


/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  // @ViewChild('eventList', { read: List }) eventList: List;

  queryText : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberProvider: PruliaMemberProvider, 
    public eventProvider: PruliaEventProvider,
    public appEvent: Events) {
    this.appEvent.subscribe('event:update',  fnSuccess => this._updateSchedule(true, true, fnSuccess));
 }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad EventPage');
    this._updateSchedule(false, false)
  }

  doRefresh(refresher){
    this._updateSchedule(true, false, (data=>{refresher.complete()}), (data=>{refresher.complete()}))
  }

  eventTapped(event_name) {
    this.navCtrl.push(EventDetailPage, { event_name: event_name });
  }

  _updateSchedule(bRefresh, bFromModel, fnSuccess?, fnError?) {
    if(!bFromModel){
      this.appEvent.publish('loading:start', 'Loading...');
    }
    
    this.eventProvider.get_event_listing(true, this.queryText, this.memberProvider.member.name)
        .then(data => {
          if(fnSuccess){
            fnSuccess();
          }
          if(!bFromModel){
            this.appEvent.publish('loading:end');
          }
          
        },(error => {
          if(fnError){
            fnError();
          }
          console.log(error)
          if(!bFromModel){
            this.appEvent.publish('loading:end');
          }
        })
      )
  }

}
