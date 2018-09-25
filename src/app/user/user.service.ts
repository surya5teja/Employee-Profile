import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
	private userUrl = 'https://young-island-32627.herokuapp.com/signup';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    console.log("user"+user);
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

}
