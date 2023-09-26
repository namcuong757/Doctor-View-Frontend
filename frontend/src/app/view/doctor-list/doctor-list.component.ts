import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account-service';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{
  doctors : Account[] = [];
  constructor(private accountService : AccountService, private calendar : CalendarService){}
  ngOnInit(): void {
    this.calendar.setStatus('yes');
    this.getDoctors();
  }
  private getDoctors()
  {
    this.accountService.getDoctors().subscribe(data=>{
      this.doctors = data;
    })
  }
}
