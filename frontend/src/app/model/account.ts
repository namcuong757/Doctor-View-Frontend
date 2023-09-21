export class Account
{
  id:number; // account ID
  name: string; // user name
  phone:string;// user phone number
  email:string;// user email id
  password:string; // user password
  gender:string; // user gender
  age:number; // user age
  birthday:string; // user birthday
  details:string; // json string: doctor's work experience, CV ?
  type:string; // account type: user, doctor, admin
  constructor()
  {
    this.id = -1;
    this.name = '';
    this.age = -1;
    this.birthday = '';
    this.gender = '';
    this.phone = '';
    this.password = '';
    this.email = '';
    this.details = '';
    this.type = 'person';
  }
}
