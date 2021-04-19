import { Component, OnInit } from '@angular/core';
import { DonationServiceService } from '../donation-service.service';

@Component({
  selector: 'app-donations-status',
  templateUrl: './donations-status.component.html',
  styleUrls: ['./donations-status.component.css']
})
export class DonationsStatusComponent implements OnInit {

  constructor(public donationService:DonationServiceService) { }

  requests:any;
  ngOnInit(): void {

    
  }

}
