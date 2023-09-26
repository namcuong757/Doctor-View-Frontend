import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account-service';
import {Account} from "../../model/account";
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  constructor(private accountService:AccountService, private calendarService : CalendarService)
  {

  }
  ngOnInit(): void {
    this.calendarService.setStatus('pending');
    console.log(this.calendarService.getStatus());
  }
  login()
  {
    let email   = (document.getElementById('email') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement).value;
    this.accountService.login(email, password).subscribe(
      data =>
      {
        console.log(data)
        window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
        window.location.href = "message/logInSuccessful";
      },
      error =>
      {
        window.location.href = "message/logInFailed";
      });

    /*
    let email   = (document.getElementById('email') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement).value;
    this.doctorService.login(email, password).subscribe(
      data =>
      {
        setTimeout(function () { window.location.reload();}, 2500);
        window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data))
      },
      error =>
      {
        // error
      });
     */
    /*
    let mockDoctor = new Account();
    mockDoctor.name = "doctor 1"
    mockDoctor.age = 50;
    mockDoctor.id = 1;
    mockDoctor.phone = "666-666-6666";
    mockDoctor.password = "1234";
    mockDoctor.birthday = "1989-06-04";
    mockDoctor.gender = "male";
    mockDoctor.type = "doctor";
    mockDoctor.details = "";
    mockDoctor.email = "doctor@gamil.com";
    window.sessionStorage.setItem("healthCenterUser", JSON.stringify(mockDoctor));
    window.location.href = "message/logInSuccessful";*/
  }



}
