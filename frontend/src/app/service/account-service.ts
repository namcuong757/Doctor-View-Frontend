import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Account } from "../model/account";
import { CalendarService } from "./calendar.service";


@Injectable({
  providedIn: 'root'
})
export class AccountService
{

  private baseURL = "http://localhost:8080/api/v1/accounts/";

  constructor(private httpClient:HttpClient, private calendarService:CalendarService)
  { }

  login(email:string, password:string):Observable<Account>
  {
    this.calendarService.setStatus('yes');
    console.log(this.calendarService.getStatus());
    const info = {
      email: email,
      password: password
    }
    const params = new HttpParams({
      fromObject: info
    });
    return this.httpClient.post<Account>(this.baseURL +'login', params);
  }


  updatePhone(id:number, phone:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      phone: phone
    }
    return this.httpClient.put<Account>('/update', JSON.stringify(info), {headers: httpHeaders });
  }

  resetPassword(id:number, password:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      password: password
    }
    return this.httpClient.put<Account>( '/update', JSON.stringify(info), {headers: httpHeaders });
  }
  getDoctors():Observable<Account[]>
  {
    return this.httpClient.get<Account[]>(`${this.baseURL}` + 'doctors');
  }
  getAccountByName(name : string):Observable<Account>
  {
    return this.httpClient.get<Account>(`${this.baseURL}` + 'name/' +`${name}`);
  }
}
