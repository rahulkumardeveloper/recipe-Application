import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QrServiceService } from '../qr-service.service';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent implements OnInit {


  constructor(public router: Router, public formBuilder: FormBuilder, private qrService: QrServiceService) { }


  clinicForm!: FormGroup;
  gloabalStatus = false;

  ngOnInit(): void {
    this.clinicForm = this.formBuilder.group({
      clinicName: ['', Validators.required],
      addressline1: ['', Validators.required],
      addressline2: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
      clinicFax: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    })
  }
  onSubmit() {
    this.gloabalStatus = true;
    // Show Error before Enter Data
    if (this.clinicForm.invalid) {
      return;
    }
    // for local storage..
    else {
      console.log(this.clinicForm.value);
      this.qrService.signUpFormData.push(this.clinicForm.value);
      this.router.navigate(['showQrResult']);
    }
  }
  SetVanluebyTeja() {
    this.clinicForm.setValue({
      clinicName: 'Teja Hospital',
      addressline1: 'Hyderabad',
      addressline2: 'Hyderabad',
      city: 'Hyderabad',
      province: 'Hyderabad',
      postalCode: '221301',
      clinicFax: '121312121',
      lat: 'teja123',
      lng: 'teja123'
    })
  }
  SetVanluebyRahul() {
    this.clinicForm.setValue({
      clinicName: 'Rahul kumar Hospital',
      addressline1: 'Hyderabad',
      addressline2: 'Hyderabad',
      city: 'Hyderabad',
      province: 'Hyderabad',
      postalCode: '221301',
      clinicFax: '121312121',
      lat: 'Rahul123',
      lng: 'Rahul123'
    })
  }
  SetVanluebyManas() {
    this.clinicForm.setValue({
      clinicName: 'Manas Hospital',
      addressline1: 'Hyderabad',
      addressline2: 'Hyderabad',
      city: 'Hyderabad',
      province: 'Hyderabad',
      postalCode: '221301',
      clinicFax: '121312121',
      lat: 'manas123',
      lng: 'manas123'
    })
  }
}
