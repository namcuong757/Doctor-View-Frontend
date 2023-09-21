export class Appointment
{
  id: number;
  doctor_id: number;
  doctor_name: string;
  person_id: number;
  person_name: number;
  fee: number;
  description:string;
  date:string
  time:number


  constructor(id: number, doctor_id: number, doctor_name: string, person_id: number, person_name: number, fee: number, description: string, date: string, time: number) {
    this.id = id;
    this.doctor_id = doctor_id;
    this.doctor_name = doctor_name;
    this.person_id = person_id;
    this.person_name = person_name;
    this.fee = fee;
    this.description = description;
    this.date = date;
    this.time = time;
  }
}
