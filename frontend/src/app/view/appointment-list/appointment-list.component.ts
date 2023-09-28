import { Component, OnInit } from '@angular/core';
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
  constructor(private appointmentService : AppointmentService, private calendarService : CalendarService){}

  ngOnInit(): void {
      this.calendarService.setStatus("yes");
      this.getAppointments();
  }
  deleteAppointment(id : number)
  {
    this.appointmentService.deleteAppointment(id).subscribe(
      data=>{
        this.getAppointments();
      }
    )
  }
  private getAppointments()
  {
    this.appointmentService.getAllAppointments().subscribe(
      data =>{
        this.appointments = data;
      }
    )
  }
}
