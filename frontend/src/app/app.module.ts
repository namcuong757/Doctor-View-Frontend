import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DoctorAppointments } from "./view/doctor-Appointments/doctor-Appointments";
import { AccountInfoComponent } from './view/account-info/account-info.component';
import { LoginComponent } from './view/login/login.component';
import { SigninComponent } from './view/signin/signin.component';
import { MessageComponent } from './view/message/message.component';

@NgModule({
  declarations: [
    AppComponent,

    DoctorAppointments,
    AccountInfoComponent,

    LoginComponent,
    SigninComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
