import { Component, OnInit } from '@angular/core';
import { QrServiceService } from '../qr-service.service';
import jsPDF from 'jspdf';
import { ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-show-qr-result',
  templateUrl: './show-qr-result.component.html',
  styleUrls: ['./show-qr-result.component.css']
})
export class ShowQrResultComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef
  constructor(private qrService: QrServiceService) { }

  clinicData: any;
  qrForData: any;
  resultStatus=false;
 name:any;
  ngOnInit(): void {
    this.clinicData = this.qrService.signUpFormData;
    console.log(this.clinicData);

    
  }
  // onClinic Data
  onClinicData(index: number) {
    console.log(this.clinicData[index]);
    this.resultStatus=true;
    //object convert in string form
    this.qrForData = JSON.stringify(this.clinicData[index]);
    this.name=this.clinicData[index].clinicName;
 
  }
  //
  //
  Download() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save(this.clinicData[0].clinicName + ".pdf");
      }
    })
  }
}


