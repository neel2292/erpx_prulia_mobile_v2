import {Component} from '@angular/core';

import {ProfilePage} from '../profile/profile';
import {EventPage} from '../event/event';
import {HomePage} from '../home/home';
import {NewsletterPage} from '../newsletter/newsletter'
import {PartnerPage} from '../partner/partner'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = EventPage;
  tab4Root = NewsletterPage;
  tab5Root = PartnerPage;

  constructor() {

  }
}
