import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar'; 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 calName=''; 
 events = []; 
  constructor(public navCtrl: NavController, public navParams : NavParams ,private ptl :Platform  ,private calendar: Calendar ) {
    this.calName = navParams.get('name'); 
    let start = new Date();
    let end = new Date();
    end.setDate(end.getDate() + 31);
    this.calendar.listEventsInRange(start, end).then(data => {
      this.events = data;
    });
  }

}
