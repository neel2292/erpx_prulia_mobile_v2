import {Component} from '@angular/core';

import {ProfilePage} from '../profile/profile';
import {EventPage} from '../event/event';
import {HomePage} from '../home/home';
import {NewsletterPage} from '../newsletter/newsletter'
import {PartnerPage} from '../partner/partner'
import {TrainingPage} from "../training/training";
import { FeedbackPage } from '../feedback/feedback';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = EventPage;
  tab4Root = TrainingPage;
  tab5Root = NewsletterPage;
  tab6Root = PartnerPage;
  tab7Root = FeedbackPage;

  constructor() {

  }
}
