import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/model/account';
import {WorkExperience} from "../../model/work-experience";
import {DoctorDetail} from "../../model/doctor-detail";

@Component({
  selector: 'app-doctor-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit
{

  role:string = "doctor";
  type:string = "info";
  user:Account = new Account();

  doctorIntroduce:string = '';
  doctorWorkExperiencesList: WorkExperience[] = [];

  constructor(private router:ActivatedRoute)
  {
  }

  ngOnInit():void
  {
    this.role = this.router.snapshot.params['role'];
    this.type = this.router.snapshot.params['type'];
    let tmp = window.sessionStorage.getItem('healthCenterUser');
    if(tmp != null)
    {
      // @ts-ignore
      this.user = JSON.parse(window.sessionStorage.getItem('healthCenterUser'));
      //this.doctorIntroduce = (JSON.parse(atob(this.user.details)) as DoctorDetail).introduce;
      //this.doctorWorkExperiencesList = (JSON.parse(atob(this.user.details)) as DoctorDetail).workExperiences;
    }
    else
    {
      this.user = new Account();
    }
  }


  updatePhoneNumber()
  {

  }

  updateEmail()
  {

  }

  resetPassword()
  {

  }

  updateWorkExperience()
  {

  }

  showAddExperienceFrom()
  {
    // @ts-ignore
    document.getElementById("showAddExperienceButton").style.visibility = 'hidden';
    // @ts-ignore
    document.getElementById("addExperienceFrom").style.display = 'block';
  }

  addExperience()
  {
    let startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    let endDate = (document.getElementById("endDate") as HTMLInputElement).value;
    let description = (document.getElementById("description") as HTMLTextAreaElement).value;
    let workExperience = new WorkExperience();
    workExperience.startDate = startDate;
    workExperience.endDate = endDate;
    workExperience.description = description;
    this.doctorWorkExperiencesList.push(workExperience);
    // @ts-ignore
    document.getElementById("showAddExperienceButton").style.visibility = 'visible';
    // @ts-ignore
    document.getElementById("addExperienceFrom").style.display = 'none';
  }

  deleteExperience(workExperience: WorkExperience)
  {
    for(let i = 0; i < this.doctorWorkExperiencesList.length; i++)
    {
      if (( this.doctorWorkExperiencesList[i].startDate == workExperience.startDate) && (this.doctorWorkExperiencesList[i].endDate == workExperience.endDate)&& (this.doctorWorkExperiencesList[i].description == workExperience.description))
      {
        this.doctorWorkExperiencesList.splice(i, 1);
      }
    }
  }


}
