import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DonationServiceService } from '../donation-service.service';
import { FoodRequestServiceService } from '../food-request-service.service';
import { LogisticRequestServiceService } from '../logistic-request-service.service';
import { MappingService } from '../mapping.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router: Router, public ticketUtility: TicketServiceService, public donationService: DonationServiceService, public foodRequestService: FoodRequestServiceService, public logDonationUtility: LogisticRequestServiceService, public mappingUtitlity: MappingService) { }
  size: number;
  requests: any;
  count: number;
  logCount: number;
  mapCount: number;
  pendingCount: number = 0;
  helpCount: number;
  ngOnInit(): void {

    // var child=new NavBarComponent();
    // child.buttonDisable();
    // console.log(child)


    
    if (localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2) !="admin") {
      this.router.navigate(['/login']);
    }
    

    this.foodRequestService.getAllFoodRequests()
      .subscribe((response: any) => {
        this.requests = response;
        // console.log(JSON.stringify(response));
        // console.log(response);
        // console.log(this.requests);
        this.size = response.length;
        this.count = 0;
        for (let res of response) {
          if (res.status == "Pending for Approval") {
            this.count++;
          }

        }



      }, error => alert("Server error"));

    this.logDonationUtility.getAllRequests()
      .subscribe((response: any) => {

        this.logCount = 0;
        for (let res of response) {
          console.log(res.status)
          if (res.status == "Pending for Approval") {
            this.logCount++;
          }
        }



      }, error => alert("Server error"));
    this.mappingUtitlity.getAllRequests()
      .subscribe((response: any) => {
        this.mapCount = 0;
        for (let res of response) {
          if (res.status == "Pending for logistics Assignment") {
            this.mapCount++;
          }
        }
      })

    this.donationService.getAllRequests()
      .subscribe((response: any) => {
        this.size = response.length;
        for (let i = 0; i < this.size; i++) {
          if (response[i].status == "Pending for Approval") {
            this.pendingCount = this.pendingCount + 1;
          }
        }
      });

    this.ticketUtility.getAllRequests()
      .subscribe((response: any) => {
        this.size = response.length;
        this.helpCount = 0;
        for (let i = 0; i < this.size; i++) {
          if (response[i].status == "Pending") {
            this.helpCount++;
          }
        }
      });

    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }


  }
  viewBlogs() {
    this.router.navigate(['/adminBlogs']);
  }
  viewDonationRequests() {
    this.router.navigate(['/View Requests']);
  }
  raiseFoodRequest() {
    this.router.navigate(['Request Food']);
    this.router.navigate(['/View Requests']);
  }
  viewFoodRequests() {

    this.router.navigate(['Food requests']);
  }

  /* This method will redirect the admin 
  to the page where he can see all the 
  logistic donation requests raised by 
  the logistic sponser*/
  viewLogisticsDonationRequests() {
    // alert("clicked")
    this.router.navigate(['/Logistic Donation Requests'])
  }
  mappedRequest() {
    this.router.navigate(['/mappedRequests']);
  }
  viewHelpRequests() {
    this.router.navigate(['/helpRequests']);
  }




}
