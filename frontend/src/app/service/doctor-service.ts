import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Account } from "../model/account";


@Injectable({
  providedIn: 'root'
})
export class DoctorService
{
  constructor(private httpClient:HttpClient)
  { }

  login(email:string, password:string):Observable<Account>
  {
    const info = {
      email: email,
      password: password
    }
    const params = new HttpParams({
      fromObject: info
    });
    return this.httpClient.post<Account>('url', params);
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


}
