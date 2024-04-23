import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  fullData: any[] = [];
  customerData: any[] = [];

  // authentication = false;
  authentication = 'Login';
  disableButtonStatus = true;// button status


  sessionAuth() {
    this.authentication = this.fullData[0].name;

    this.disableButtonStatus = false;  //change button status

    console.log(this.fullData[0].name);
  }

  // mke a new services
  mainData(data: any) {
    this.fullData.push(data);
  }
  contactDetails(data1: any) {
    this.customerData.push(data1);
  }
}
