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
    PersonViewComponent
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
