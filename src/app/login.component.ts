import { Component } from '@angular/core';
import { User } from './user/models/user.model';

@Component({
  selector: 'login-root',
  template: `<div style="width:70%;float:left">In progress</div>
  <div style="width:30%;float:left;">
    <div style="text-align: center">Login</div>
      <div>
          <label for="email">Email address:</label>
          <input type="email" [(ngModel)]="user.email"  name="email" id="email">
        </div>
        <div>
            <label for="email">Password:</label>
            <input type="email" [(ngModel)]="user.password" name="password" id="password">
          </div>
  </div>`,
  styles: ['']
})
export class loginComponent {
    user: User = new User();
}
