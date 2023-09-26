import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Account} from "../../model/account";
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-massage',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit
{
  message:string = 'title';
  error:string = '';
  targetPage:string = 'Home';

  num:number = 5;
  constructor(private router:ActivatedRoute, private calendarService : CalendarService)
  {

  }

  ngOnInit():void
  {
    if(this.router.snapshot.params['message'] == 'logInSuccessful')
    {
      // @ts-ignore
      let doctor:Account = JSON.parse( window.sessionStorage.getItem('healthCenterUser') );
      this.message = 'Welcome Back ' + doctor.name;
      this.targetPage = "person-view";
      this.calendarService.setStatus('yes');
    }

    if(this.router.snapshot.params['message'] == 'logOutSuccessful')
    {
      this.message = 'You Are Already Log Out';
      this.targetPage = "LogIn";
    }


    setInterval(
      ()=>
      {
        if(this.num != 0)
        {
          // @ts-ignore
          document.getElementById('timer').innerHTML = '<h2>Jump after '+this.num+' seconds</h2>';
          this.num = this.num - 1;
          console.log(this.num);
        }
        else
        {
          this.num = 5;
          window.location.href = this.targetPage;
        }
      },1000);
  }
}
