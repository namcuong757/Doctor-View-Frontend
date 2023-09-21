import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account-service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{
  doctors : Account[] = [];
  constructor(private accountService : AccountService){}
  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors()
  {
    this.accountService.getDoctors().subscribe(data=>{
      this.doctors = data;
    })
  }
}
