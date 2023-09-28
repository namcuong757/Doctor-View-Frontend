import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorAppointments } from "./view/doctor-Appointments/doctor-Appointments";
import { AccountInfoComponent } from './view/account-info/account-info.component';
import { LoginComponent } from './view/login/login.component';
import { SigninComponent } from './view/signin/signin.component';
import { MessageComponent } from './view/message/message.component';

import { CalendarComponent } from './view/calendar/calendar.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { DoctorListComponent } from './view/doctor-list/doctor-list.component';
import { PersonViewComponent } from './view/person-view/person-view.component';
import { AppointmentListComponent } from './view/appointment-list/appointment-list.component';
import { DoctorDashboardComponent } from './view/doctor-dashboard/doctor-dashboard.component';
import { SearchAppointmentComponent } from './view/search-appointment/search-appointment.component';

@NgModule({
  declarations: [
    AppComponent,

    DoctorAppointments,
    AccountInfoComponent,

    LoginComponent,
    SigninComponent,
    MessageComponent,
    CalendarComponent,
    AppointmentComponent,
    DoctorListComponent,
    PersonViewComponent,
    AppointmentListComponent,
    DoctorDashboardComponent,
    SearchAppointmentComponent  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
