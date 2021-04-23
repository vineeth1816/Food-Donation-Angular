import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DonationServiceService } from '../donation-service.service';

@Component({
  selector: 'app-view-food-requests',
  templateUrl: './view-food-requests.component.html',
  styleUrls: ['./view-food-requests.component.css']
})
export class ViewFoodRequestsComponent implements OnInit {

  constructor(public donationService: DonationServiceService, public router: Router) { }
  ngOnInit(): void {
    
  }

  }
