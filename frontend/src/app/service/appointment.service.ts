import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Appointment } from '../model/appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseURL = "http://localhost:8080/api/v1/appointments";
  constructor(private httpClient : HttpClient) {}
  createAppointment(appointment : Appointment):Observable<Appointment>
  {
    return this.httpClient.post<any>(`${this.baseURL}`, appointment);
  }
  getAllAppointments():Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }
  getAllAppointmentsByDate(date : string):Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/${date}`);
  }
  getAppointmentsById(id : number):Observable<Appointment>
  {
    return this.httpClient.get<Appointment>(`${this.baseURL}/${id}`);
  }
  updateAppointment(id : number, appointment : Appointment): Observable<Object>
  {
    return this.httpClient.put<Appointment>(`${this.baseURL}/${id}`, appointment);
  }
  deleteAppointment(id : number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getAppointmentsByDoctorIDAndDate(doctor_id:number,date:number):Observable<Appointment []>
  {
    console.log(this.baseURL + '/doctor/date/' + doctor_id + "/" + date);
    return this.httpClient.get<Appointment[]>(this.baseURL + 'doctor/date/' + doctor_id + "/" + date);
  }
}
