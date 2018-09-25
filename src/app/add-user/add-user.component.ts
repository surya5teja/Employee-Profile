import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/models/user.model';
import { UserService } from '../user/user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();
  constructor(private router: Router, private userService: UserService) {

  }

  createUser(userForm): void {
    console.log(this.user);
   if (userForm.valid) {
    this.userService.createUser(this.user)
        .subscribe( (data) => {
          this.router.navigate(['/success']);
          console.log("success" + data.email);
      }, 
      (error: any) => {
          console.log(error)
      });
   }
  };

 /* getUser(): void{
    this.userService.createUser()
    .subscribe( data => {
      console.log(data);
    });
  };*/

}