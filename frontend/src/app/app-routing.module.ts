import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointments } from "./view/doctor-Appointments/doctor-Appointments";
import { LoginComponent } from "./view/login/login.component";
import { SigninComponent } from "./view/signin/signin.component";
import {MessageComponent} from "./view/message/message.component";
import {AccountInfoComponent} from "./view/account-info/account-info.component";
import { AppointmentComponent } from './view/appointment/appointment.component';
import { DoctorListComponent } from './view/doctor-list/doctor-list.component';
import { PersonViewComponent } from './view/person-view/person-view.component';
import { AppointmentListComponent } from './view/appointment-list/appointment-list.component';
import { DoctorDashboardComponent } from './view/doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  {path:"logIn"                 , component:LoginComponent},
  {path:"signIn"                , component:SigninComponent},
  {path:"doctor/home"           , component:AccountInfoComponent},
  {path:"myAccount/:type" , component:AccountInfoComponent},
  {path:"myAccount/appointments/:date" , component:AccountInfoComponent},
  {path:"message/:message"      , component:MessageComponent},
  {path:"appointment", component:AppointmentComponent},
  {path:"doctor-list", component:DoctorListComponent},
  {path:"person-view", component:PersonViewComponent},
  {path:"appointment/list", component:AppointmentListComponent},
  {path:"doctor/appointment/:date", component:DoctorDashboardComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

