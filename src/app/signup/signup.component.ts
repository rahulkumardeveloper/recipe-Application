import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,public route:Router, public services:ServicesService) { }
  signupForm!: FormGroup;
  gloabalStatus = false;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', [Validators.required]],
    })
  }
  onSubmit() {
    this.gloabalStatus = true;

    // before enterring data return
    if (this.signupForm.invalid) {
      return;
    }
    // this.gloabalStatus=true;
    else {
      console.log(this.signupForm.value);
      this.services.mainData(this.signupForm.value);// call the services
      this.route.navigate(['/login']);// when using of this navigate method behave like routerLink
    }
  }

}
