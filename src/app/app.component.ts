import { Component } from '@angular/core';
import { OwlDateTimeComponent } from './idatepicker';
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idp';
  dateTime:any;
  
  chosenDateHandler( normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment> ) {
    const ctrlValue = this.dateTime.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateTime.setValue(ctrlValue);
    datepicker.close();
}
}
