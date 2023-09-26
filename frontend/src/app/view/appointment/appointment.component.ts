import { Component } from '@angular/core';
import * as $ from 'jquery';
import { CalendarService } from 'src/app/service/calendar.service';
import { Appointment } from 'src/app/model/appointment';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account-service';
import { AppointmentService } from 'src/app/service/appointment.service';

interface DepartmentDoctors {
  [key: string]: string[];
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent {
  constructor(public calendar : CalendarService, private accountService : AccountService, private appointmentService : AppointmentService){}
  private currentStep : number = 0;
  selectedDepartmentId: string = '';
  selectedDoctorId: string = '';
  doctors: string[] = [];
  appointment : Appointment = new Appointment;
  private choosenDocAccount : Account = new Account;
  private currentUser : Account = new Account;
  doctorsByDepartment: DepartmentDoctors = {
    "1": ["John Smith", "Marry Jane"],
    "2": ["Wonderland Alice", "Curl Bob"],
    "3": ["Nam Tran", "Nam Cuong"],
    "4": ["Thuan Nguyen", "Tran Hai"],
    "5": ["Hue Pham", "Nguyen Tran"],
    "6": ["John Nguyen", "John Wick"],
    "7": ["Hung Tran", "Cao Bang"],
    "8": ["Huyen Xi", "Quyen Nguyen"],
  };
  ngOnInit(){
    this.calendar.setStatus('yes');
   }
  setCurrentStep(newStep : number)
  {
    this.currentStep = newStep;
  }
  onDepartmentChange()
  {
    this.doctors = this.doctorsByDepartment[this.selectedDepartmentId] || [];
    this.selectedDoctorId = '';
  }
  onDoctorChange(): void {
    console.log(this.selectedDoctorId);
    this.accountService.getAccountByName(this.selectedDoctorId).subscribe(data => {
      this.choosenDocAccount = data;
      console.log(this.choosenDocAccount);
      // Set appointment information based on the chosen doctor
      this.setAppointmentInfo();
    });
  }
  setAppointmentInfo(): void {
    this.currentUser = this.calendar.getCurrentUser();
    this.appointment.doctor_id = this.choosenDocAccount.id;
    this.appointment.doctor_name = this.choosenDocAccount.name;
    this.appointment.person_id = this.currentUser.id;
    this.appointment.person_name = this.currentUser.name;
    this.appointment.fee = 50;
  }
  createAppoinment()
  {
    this.appointment.date = this.calendar.getChoosenDate();
    this.appointment.time = this.calendar.getChoosenTime();
    console.log(this.appointment);
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (response) => {
        console.log('Appointment created!', response);
      },
      error: (err) => {
        console.error('Error creating appointment!', err);
      }
    });
  }
}

