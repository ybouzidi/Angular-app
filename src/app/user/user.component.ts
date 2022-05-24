import { AfterContentChecked, AfterViewChecked, AfterViewInit, ContentChild, ElementRef, OnDestroy } from '@angular/core';
import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[LoggingService]
})
export class UserComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {

  constructor(private loggingService : LoggingService, private _userSerivce : UserService) { 
    //console.log('constructor called');
  }

  @Input() userName! :string;
  @Input() id! : number;
  @Input() idx : number;
  @Input() name : string;
  @Input() user:{id:number,name:string, status:string};
  @ContentChild('userParagraph') userParagraph : ElementRef;

  userId: number = 10;
  userStatus = 'Offline';

  getUserStatus(){
    return this.userStatus;
  }

  onUpdateStatus(status){
    //console.log('onUpdateStatus called : ' + this.idx);
    this._userSerivce.updateStatus(this.idx,status);
  }

  ngOnInit(): void {
    //console.log('ngOnInit called');
      //this.loggingService.logToConsole('ngOnInit called');
  }
  ngOnChanges(element:SimpleChanges){
    //console.log('ngOnChanges called');
    //this.loggingService.logToConsole('ngOnChanges called');
    
    
    //console.log(element);
    //this.loggingService.logToConsole(element);
  }

  ngDoCheck(): void {
    //console.log('ngDoCheck called');
    //this.loggingService.logToConsole('ngDoCheck called');
  }

  ngAfterContentInit(){
    //console.log('ngAfterContentInit called');
    //this.loggingService.logToConsole('ngAfterContentInit called');
    //console.log(this.userParagraph.nativeElement.textContent);  
    //this.loggingService.logToConsole(this.userParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //console.log('ngAfterContentChecked called');
    //this.loggingService.logToConsole('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit called'); 
    //this.loggingService.logToConsole('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked called'); 
    //this.loggingService.logToConsole('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    //console.log('ngOnDestroy called'); 
    //this.loggingService.logToConsole('ngOnDestroy called');
  }

  
}
