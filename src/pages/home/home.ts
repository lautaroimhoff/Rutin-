import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendars = []; 
  constructor(public navCtrl: NavController , private calendar : Calendar  , private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then( data => {
        this.calendars = data; 
      });  
})
}

addEvent(cal){
let date = new Date(); 
let options = {caledarId : cal.id , calendarName : cal.name , url : 'https://ionicacademy.com', firstReminderMinutes: 15 }
this.calendar.createEventInteractivelyWithOptions('Mi evento Nuevo', 'Falopa ' , 'Notas Especiales', date , date , options).then(
  res => {} , err => {
    console.log('err:' , err); 

  }
); 
}

openCal(cal){
this.navCtrl.push('CalDetailsPage' , {name: cal.name })

}



}
  