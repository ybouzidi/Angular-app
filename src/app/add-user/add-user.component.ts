import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[LoggingService]
})
export class AddUserComponent implements OnInit {

  constructor(private loggingService : LoggingService, private userService:UserService) { }
  userName : string;
  //@ViewChild('userInput') userInput : ElementRef;
  @Output() userAdded = new EventEmitter<string>();
  ngOnInit() {
    this.userService.statusUpdated.subscribe(data => {
      alert(data);
    });
  }
  changeUserCreatedStatus(){
    //console.log(this.userInput.nativeElement.value);
    this.userAdded.emit(this.userName);
    //console.log('user is added : ' + this.userName);
    this.loggingService.logToConsole('user is added : ' + this.userName);
    //this.userAdded.emit(this.userInput.nativeElement.value);
    this.userService.addUser(this.userName,'active');
  }

// [disabled]="allowNewUser" (click)="changeUserCreatedStatus()"


}
