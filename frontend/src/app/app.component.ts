import { Component } from '@angular/core';
import { Account } from './model/account';
import { AccountService } from './service/account-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Doctor';
  user:Account = new Account();

  constructor(private doctorService:AccountService)
  {
    if(window.sessionStorage.getItem('healthCenterUser') != null)
    {
      // @ts-ignore
      this.user = JSON.parse( window.sessionStorage.getItem('healthCenterUser') );
    }
    else
    {
      this.user = new Account();
    }
  }


  openLogIn()
  {
    //this.bsModalRef = this.modalService.show(LoginView);
  }

  openSignIn()
  {
    //this.bsModalRef = this.modalService.show(SignInView);
  }

  logOut()
  {
    window.sessionStorage.removeItem('healthCenterUser');
    window.location.href = "message/logOutSuccessful";
  }

}
