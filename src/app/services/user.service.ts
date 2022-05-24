import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _logService : LogService) { }
  
  statusUpdated = new EventEmitter<string>();
  users=[
    { 
    id:1, 
    name:"Yakoub", 
    status: "active" 
    },
    { 
      id:2, 
      name:"Yakoub2", 
      status: "active" 
    },
    { 
      id:3, 
      name:"Yakoub3", 
      status: "active" 
    },
  ];

  addUser(name:string, status: string){
    let _id = this.users.length + 1;
    console.log('pushing new user on users list');
    this.users.push({id:_id,name:name,status:status});
    this._logService.logStatus(status);
    //console.dir(this.users);
  }

  updateStatus(id:number, status:string){    
    this.users[id].status = status;
    this._logService.logStatus(status);
    this.statusUpdated.emit(status);
    //console.log(this.users[id]);
  }
}
