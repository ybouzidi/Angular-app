import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logStatus(status:string){
    console.log('logging the status in the console and the status is : ' + status)
  }
}
