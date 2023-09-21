import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private choosenDay: number = 0;
  private choosenTime : number = 0;
  disabledTime: number[] = [900,1400];
  constructor() { }
  setChooseDay(day: number) {
    this.choosenDay = day;
  }
  getChooseDay() {
    return this.choosenDay;
  }
  setChoosenTime(time : number)
  {
    this.choosenTime = time;
  }
  getChoosenTime()
  {
    return this.choosenTime
  }
  isDisabledTime(time : number)
  {
    return this.disabledTime.includes(time);
  }
}
