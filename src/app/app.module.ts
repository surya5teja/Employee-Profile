import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './add-user/add-user.component';
import {headerComponent} from './header.component';
import {footerComponent} from './footer.component';
import {loginComponent} from './login.component';
import { userSuccessComponent } from './add-user/user-success.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    headerComponent,
    footerComponent,
    loginComponent,
    userSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent, headerComponent, footerComponent]
})
export class AppModule { }
