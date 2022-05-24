import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, OnChanges {
  title = 'my_angular-app';
  name = 'test';
  users:{id:number,name:string,status:string}[]=[];
  constructor(private _user:UserService){}
  ngOnInit(): void {
    this.users = this._user.users;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.users = this._user.users;
  }
}
