import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Appointment} from "../../model/appointment";
import { AppointmentService } from 'src/app/service/appointment.service';
import {Account} from "../../model/account";
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit
{

  mouthList:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dayList:number[] = [31,28,31,30,31,30,31,31,30,31,30,31];

  year:number = -1;
  mouth:string = "";
  mouthIndex:number = -1;
  days:number[] = [];
  emptyDays:string[] = [];
  date:number = -1;
  currentDate:number = -1;
  prev:string = "";
  next:string = "";

  currentSecords:number = -1
  currentMinutes:number = -1;
  currentHours:number = -1;
  currentTime: Date = new Date();

  user:Account = new Account();
  appointmentList:Appointment[] = [];
  currentAppointment:Appointment = new Appointment();

  ngOnInit()
  {
    this.calendarService.setStatus('yes');
    let inputDate = this.router.snapshot.params['date'];
    if(inputDate != 'today')
    {
      this.currentDate = inputDate;
      this.year = (parseInt(inputDate) - parseInt(inputDate) % 10000) / 10000;
      this.date = (parseInt(inputDate) - this.year*10000) % 100;
      this.mouthIndex = ((parseInt(inputDate) - this.year*10000) - this.date)/100;
      this.mouth = this.mouthList[this.mouthIndex -1];
      if(this.LeapYear(this.year) && this.mouth == "February")
      {
        this.days = Array(29).fill(1).map((x,i)=> (i+1) );
      }
      else
      {
        this.days = Array(this.dayList[this.mouthIndex-1]).fill(1).map((x,i)=> (i+1) );
      }
      this.emptyDays = Array(7 - (this.date - this.Week() - 1)%7).fill(' ');
    }
    else
    {
      this.year = new Date().getFullYear();
      this.mouth = this.mouthList[new Date().getMonth()];
      this.date = new Date().getDate();
      this.mouthIndex = new Date().getMonth() + 1;
      this.mouth = this.mouthList[this.mouthIndex -1];
      this.currentDate = this.year*10000 + this.mouthIndex * 100 + this.date;
      if(this.LeapYear(this.year) && this.mouth == "February")
      {
        this.days = Array(29).fill(1).map((x,i)=> (i+1) );
      }
      else
      {
        this.days = Array(this.dayList[this.mouthIndex-1]).fill(1).map((x,i)=> (i+1) );
      }
      this.emptyDays = Array(7 - (this.date - this.Week() - 1)%7).fill(' ');
    }

    if(this.mouthIndex > 1 && this.mouthIndex < 12)
    {
      this.prev = "/doctor/appointment/" + (this.year*10000+(this.mouthIndex-1)*100+this.date);
      this.next = "/doctor/appointment/" + (this.year*10000+(this.mouthIndex+1)*100+this.date);
    }
    else if(this.mouthIndex==1)
    {
      this.prev = "/doctor/appointment/" + ((this.year-1)*10000+1200+this.date);
      this.next = "/doctor/appointment/" + (this.year*10000+(this.mouthIndex+1)*100+this.date);
    }
    else
    {
      this.prev = "/doctor/appointment/" + (this.year*10000+(this.mouthIndex-1)*100+this.date);
      this.next = "/doctor/appointment/" + ((this.year+1)*10000+100+this.date);
    }

    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem('healthCenterUser'));

    if(this.user != null)
    {
      this.appointmentService.getAppointmentsByDoctorIDAndDate(this.user.id, this.currentDate)
        .subscribe(
          (data)=>
          {
            this.appointmentList = Array(8);
            for (let i=0; i<this.appointmentList.length; i++)
            {
              this.appointmentList[i] = new Appointment()
              this.appointmentList[i].time = (i + 9) * 100;
            }
            console.log(this.appointmentList)
            for (let i=0; i<data.length; i++)
            {
              this.appointmentList[data[i].time / 100 - 9] = data[i];
            }
            console.log(this.appointmentList)
          });
    }

    setInterval
    (() => {
      this.setSecondPointerPosition()
    }, 1000);
  }

  constructor(private router:ActivatedRoute, private appointmentService:AppointmentService, private calendarService: CalendarService)
  {

  }

  showAppointmentDetail(app:Appointment)
  {
    this.currentAppointment = app;
  }

  setSecondPointerPosition()
  {
    let dom:any = document.querySelector('.second-pointer');
    const newSecords = new Date().getSeconds();
    if (newSecords != this.currentSecords)
    {
      this.currentSecords = newSecords
      dom.style.transform = `translate(-50%, -100%) rotate(${360 * this.currentSecords / 60}deg)`;
      this.setMinutePointerPosition();
    }
  }

  setMinutePointerPosition()
  {
    let dom:any = document.querySelector('.minute-pointer');
    const newMinutes = new Date().getMinutes();
    if (newMinutes != this.currentMinutes)
    {
      this.currentMinutes = newMinutes;
      dom.style.transform = `translate(-50%, -100%) rotate(${360 * this.currentMinutes / 60}deg)`;
      this.setHourPointerPosition();
    }
  }

  setHourPointerPosition()
  {
    let dom:any = document.querySelector('.hour-pointer');
    const newHours = new Date().getHours();
    if (newHours != this.currentHours)
    {
      this.currentHours = newHours;
      dom.style.transform = `translate(-50%, -100%) rotate(${(360 * newHours / 12)+(30*this.currentMinutes/60)}deg)`
    }
  }


  LeapYear(year:number)
  {
    if(year%4==0&&year%100!=0||year%400==0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  Week()
  {
    var dayNum = this.date;
    var monthNum = 0;
    var yearNum = 0;
    var week = 0;

    var year = this.year;


    if(this.mouthIndex ==5)
    {
      monthNum = 0;
    }
    else if
    (this.mouthIndex == 8)
    {
      monthNum = 1;
    }
    else if(this.mouthIndex == 2||this.mouthIndex == 3||this.mouthIndex == 11)
    {
      monthNum = 2;
    }
    else if(this.mouthIndex == 6)
    {
      monthNum = 3;
    }
    else if(this.mouthIndex == 9||this.mouthIndex == 12)
    {
      monthNum = 4;
    }
    else if(this.mouthIndex == 4||this.mouthIndex == 7)
    {
      monthNum = 5;
    }
    else if(this.mouthIndex == 1||this.mouthIndex == 10)
    {
      monthNum = 6;
    }

    // @ts-ignore
    yearNum = (parseInt((year%100) / 4 ) + year%100 )%7

    return (dayNum + monthNum +yearNum) % 7;
}




}
