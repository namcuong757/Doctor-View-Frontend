import { Component } from '@angular/core';
import * as $ from 'jquery';
import { CalendarService } from 'src/app/service/calendar.service';
import { Appointment } from 'src/app/model/appointment';
interface DepartmentDoctors {
  [key: string]: string[];
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent {
  constructor(public calendar : CalendarService){}
  private currentStep : number = 0;
  private appointment : Appointment = new Appointment;
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
    $("#selectedDepartmentId").change(() => {
      let departmentId = $("#selectedDepartmentId").val() as string; // Get the selected department ID
      let doctors = this.doctorsByDepartment[departmentId] || []; // Fetch doctors or default to empty array
      
      let doctorsDropdown = $("#selectedDoctorId");
      doctorsDropdown.empty(); // Clear previous options

      for(let doctor of doctors) {
          doctorsDropdown.append(new Option(doctor, doctor)); // Append each doctor as an option
      }
  });
    $("#selectedDoctorId").change(() => {
      let selectedDoctor = $("#selectedDoctorId").val() as string; // Get the selected doctor
      console.log("Selected Doctor: ", selectedDoctor); // Now you know which doctor was selected.
      });
  }
  setCurrentStep(newStep : number)
  {
    this.currentStep = newStep;
  }

}

