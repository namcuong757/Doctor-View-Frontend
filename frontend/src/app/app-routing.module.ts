import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointments } from "./view/doctor-Appointments/doctor-Appointments";
import { LoginComponent } from "./view/login/login.component";
import { SigninComponent } from "./view/signin/signin.component";
import {MessageComponent} from "./view/message/message.component";
import {AccountInfoComponent} from "./view/account-info/account-info.component";

const routes: Routes = [
  {path:"logIn"                 , component:LoginComponent},
  {path:"signIn"                , component:SigninComponent},
  {path:"doctor/home"           , component:AccountInfoComponent},
  {path:"myAccount/:type" , component:AccountInfoComponent},
  {path:"myAccount/appointments/:date" , component:AccountInfoComponent},
  {path:"message/:message"      , component:MessageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

