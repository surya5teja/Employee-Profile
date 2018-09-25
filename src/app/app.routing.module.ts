import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { userSuccessComponent } from './add-user/user-success.component';

var routes: Routes = [{ path: 'users', component: UserComponent },
{ path: 'add', component: AddUserComponent },
{ path: 'success', component: userSuccessComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }