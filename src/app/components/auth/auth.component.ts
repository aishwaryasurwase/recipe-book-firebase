import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isAuthenticate = false;

  constructor(private authSerive: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.isLoginMode) {
      // Login
      let user = this.authSerive.verifyUser(form.value.email, form.value.password);
      console.log("USER DETAILS ....", user);
      if (user) {
        console.log("User login successful...");
        this.isAuthenticate = true;
        this.authSerive.isAuthenticate.next(true);
        this.router.navigate(['/recipes'])
      } else {
        console.log("Failed to login...");
      }
    } else {
      // Signup
      this.authSerive.addUser(form.value.email, form.value.password)
      // .subscribe((user) => {
      //   console.log("Account created successfully");
      // }, (err) => {
      //   console.log(err);
      // })
    }
    form.reset();
  }

}
