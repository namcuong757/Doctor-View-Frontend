import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit{
  constructor(private calendarService:CalendarService){}
  ngOnInit(): void {
    this.calendarService.setStatus('yes');
  }

}
