import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  constructor() { }

  ngOnInit(): void {
  }

}
