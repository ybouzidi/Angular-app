import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Userr } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation : ViewEncapsulation.Emulated,
  
})
export class UsersComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }
  allowNewUser = false;
  userCreatedStatus = 'No User is Created !';
  userName:string = '';
  isUserCreated = false;
  users:Userr[]= [];
  name='test test';
  isAvailable:boolean = true;
  value;

  changeUserCreatedStatus(event : string){
    this.userCreatedStatus = 'User is Created !';
    this.isUserCreated = true;    
    this.users.push({id:this.users.length+1, name: event, status:"active"});
    
  }
  ngOnInit(): void {
  }
  
  onNameChanged(){
    this.name='test test';
    //console.log('name chnaged : ' + this.name);
    this.loggingService.logToConsole('name chnaged : ' + this.name);
  }

  onDeleteComponent(){
    this.users=[];
  }
}
