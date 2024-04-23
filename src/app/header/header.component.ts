import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public services: ServicesService) { }

  authenticate: any;

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.authenticate = this.services.authentication;
  }


}
