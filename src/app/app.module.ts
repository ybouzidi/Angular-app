import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirective } from './Directives/HighlightText.directive';
//import { RenderHighlightDirective } from './Directives/render-highlight.directive';
import { AlternateIfDirective } from './Directives/alternateIf.directive';
import { UserService } from './services/user.service';
import { LogService } from './services/log.service';
import { RenderHighlightDirective } from './Directives/render-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    HighlightTextDirective,
    AlternateIfDirective,
    RenderHighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
