import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointments : Appointment[] = [];
  current_user : Account = new Account;
  constructor(private appointmentService : AppointmentService, private calendarService : CalendarService){}

  ngOnInit(): void {
    this.current_user = this.calendarService.getCurrentUser();
      this.calendarService.setStatus("yes");
      this.getAppointmentsByPersonId(this.current_user.id);
  }
  deleteAppointment(id : number)
  {
    this.appointmentService.deleteAppointment(id).subscribe(
      data=>{
        this.getAppointmentsByPersonId(this.current_user.id);
      }
    )
  }
  private getAppointmentsByPersonId(id:number)
  {
    this.appointmentService.getAllAppointmentByPersonId(id).subscribe(
      data =>{
        this.appointments = data;
      }
    )
  }
}
