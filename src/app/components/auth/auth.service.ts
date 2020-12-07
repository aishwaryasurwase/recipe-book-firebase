import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Auth[] = [];
  isAuthenticate: Subject<boolean> = new Subject<boolean>();
  
  constructor() { }

  addUser(email: string, password: string) {
    let newUser = this.users.find((user) => {
      return user.email === email;
    })
    if (!newUser) {
      this.users.push({ email: email, password: password });
      console.log("Account created successfully...");
    } else {
      console.log("Email already exists...");
    }
  }

  verifyUser(email: string, password: string) {
    let user = this.users.find((user) => {
      return user.email === email && user.password === password
    })
    return user;
  }


}
