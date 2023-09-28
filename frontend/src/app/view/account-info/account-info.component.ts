import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/model/account';
import {WorkExperience} from "../../model/work-experience";
import {DoctorDetail} from "../../model/doctor-detail";
import {AccountService} from "../../service/account-service";

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

  doctorAppointmentFee = 0;
  doctorIntroduce:string = '';
  doctorWorkExperiencesList: WorkExperience[] = [];

  constructor(private router:ActivatedRoute, private accountService:AccountService)
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
      this.doctorAppointmentFee = (JSON.parse(atob(this.user.details)) as DoctorDetail).appointmentFee;
      this.doctorIntroduce = (JSON.parse(atob(this.user.details)) as DoctorDetail).introduce;
      this.doctorWorkExperiencesList = (JSON.parse(atob(this.user.details)) as DoctorDetail).workExperiences;
    }
    else
    {
      this.user = new Account();
    }
  }

  updatePhoneNumber()
  {
    let id = this.user.id;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    if (phone == '')
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Phone Number Is Empty</div>';
    }
    else if(phone == this.user.phone)
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Please Enter A New Number</div>';
    }
    else
    {
      this.accountService.updatePhone(id, phone).subscribe(
        (data)=>
        {
          window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
          window.location.href = "message/updateSuccessful";
        },
        error =>
        {
          window.location.href = "message/updateFailed";
        }
      );
    }
  }

  updateEmail()
  {
    let id = this.user.id;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    if (email == '')
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">E-mail Is Empty</div>';
    }
    else if(email == this.user.phone)
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Please Enter A New E-mail</div>';
    }
    else
    {
      this.accountService.updateEmail(id, email).subscribe(
        (data)=>
        {
          window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
          window.location.href = "message/updateSuccessful";
        },
        error =>
        {
          window.location.href = "message/updateFailed";
        }
      );
    }
  }

  resetPassword()
  {
    let id = this.user.id;
    let password = (document.getElementById("password") as HTMLInputElement).value;
    let confirm = (document.getElementById("confirm") as HTMLInputElement).value;
    let oldPassword = (document.getElementById("oldPassword") as HTMLInputElement).value;
    if (password == '')
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger"> Password Is Empty</div>';
    }
    else if(password == this.user.password)
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Please Enter A New Password</div>';
    }
    else if(oldPassword != this.user.password)
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">You Original PassWord Is Incorrect</div>';
    }
    else if(password != confirm)
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">PassWord and Confirm Password not Match</div>';
    }
    else
    {
      this.accountService.resetPassword(id, password).subscribe(
        (data)=>
        {
          window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
          window.location.href = "message/updateSuccessful";
        },
        error =>
        {
          window.location.href = "message/updateFailed";
        }
      );
    }
  }

  updateAppointmentFee()
  {
    let newDoctorDetail = new DoctorDetail();
    let id = this.user.id;
    let appointmentFee = (document.getElementById("appointmentFee") as HTMLInputElement).value;
    if (appointmentFee == '')
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Appointment Fee Is Empty</div>';
    }
    else
    {
      newDoctorDetail.appointmentFee = Number(appointmentFee);
      newDoctorDetail.introduce = this.doctorIntroduce;
      newDoctorDetail.workExperiences = this.doctorWorkExperiencesList;

      this.accountService.updateDetails(id, btoa(JSON.stringify(newDoctorDetail))).subscribe(
        (data)=>
        {
          window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
          window.location.href = "message/updateSuccessful";
        },
        error =>
        {
          window.location.href = "message/updateFailed";
        }
      );
    }
  }

  updateWorkExperience()
  {
    let newDoctorDetail = new DoctorDetail();
    let id = this.user.id;
    let introduce = (document.getElementById("introduce") as HTMLTextAreaElement).value;
    if (introduce == '')
    {
      // @ts-ignore
      document.getElementById("errorMessage").innerHTML = '<div class="alert alert-danger">Resume Is Empty</div>';
    }
    else
    {
      newDoctorDetail.appointmentFee = this.doctorAppointmentFee;
      newDoctorDetail.introduce = introduce;
      newDoctorDetail.workExperiences = this.doctorWorkExperiencesList;

      this.accountService.updateDetails(id, btoa(JSON.stringify(newDoctorDetail))).subscribe(
        (data)=>
        {
          window.sessionStorage.setItem("healthCenterUser", JSON.stringify(data));
          window.location.href = "message/updateSuccessful";
        },
        error =>
        {
          window.location.href = "message/updateFailed";
        }
      );
    }
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
