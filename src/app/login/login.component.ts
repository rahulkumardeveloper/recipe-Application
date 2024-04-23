import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public services: ServicesService, public route: Router, public formBuilder: FormBuilder) { }

  massege: any;
  loginForm!: FormGroup;
  reqData = this.services.fullData;
  globalStatus = false;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      lemail: ['', Validators.required],
      lpassword: ['', Validators.required]

    })
  }
  // click on login button
  login() {
    this.globalStatus = true;
    console.log(this.loginForm.value);
    let newdata: any = this.reqData[0];
    if (this.loginForm.value.lemail == newdata.email && this.loginForm.value.lpassword == newdata.password) {
      this.massege = " Login Successfull.....";
      this.route.navigate(['/recipe']);

      // when click on login button then call the services
      this.services.sessionAuth();
    } else {
      alert("Email and Password is wrong...");
    }
  }
  // reset the login page
  reset() {
    this.loginForm.reset();
  }
}
