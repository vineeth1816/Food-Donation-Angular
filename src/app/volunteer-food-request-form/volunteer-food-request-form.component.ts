import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { AdminRequestsService } from '../admin-requests.service';
import { DonationServiceService } from '../donation-service.service';

import { DonationrequestserviceService } from '../donationrequestservice.service';
import { FoodRequestServiceService } from '../food-request-service.service';
import { FoodDonationRequest } from '../FoodDonationRequest';
import { FoodRequest } from '../FoodRequest';
import { MappingService } from '../mapping.service';


@Component({
  selector: 'app-volunteer-food-request-form',
  templateUrl: './volunteer-food-request-form.component.html',
  styleUrls: ['./volunteer-food-request-form.component.css']
})
export class VolunteerFoodRequestFormComponent implements OnInit {
  donor = new FoodDonationRequest();
  foodRequest=new FoodRequest();
  name: string;
  userId: string;
  constructor(public router:Router,public donorUtility:DonationServiceService,public mappingUtility:MappingService,public adminUtility:AdminRequestsService,public donationUtility: DonationrequestserviceService, public requestUtility: FoodRequestServiceService) { }


  ngOnInit(): void {

    this.name = "hell";
    this.donor.name = localStorage.getItem('volunteeredRequestName');
    this.donor.noOfPackets = Number(localStorage.getItem('volunteeredRequestQuantity'));


  }

  volunteer(myForm: NgForm) {
    this.donor.status = "Mapped";
    this.donor.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    this.donor.purpose = "Volunteering"
    this.donationUtility.insertDonationRequest(this.donor)
      .subscribe(result => {
        if (result != null) {
          this.requestUtility.changeStatus(localStorage.getItem('volunteeredRequestId').toString(), "Mapped")
            .subscribe(result=>{
              if(result){
                
                this.adminUtility.deleteRequest(localStorage.getItem('volunteeredRequestId').toString(),"Food")
                .subscribe(result=>{
                  if(result){
                    this.donorUtility.getRequestById(this.donor.userId)
                    .subscribe(response=>{
                      if(response!=null)
                      {
                        // console.log(response[0].donationId);
                        this.donor.donationId=response[0].donationId;

                        this.foodRequest.requestId=localStorage.getItem('volunteeredRequestId');
                        
                        this.mappingUtility.mapRequestDonor(this.foodRequest,this.donor)
                        .subscribe(result=>{
                          if(result){
                            alert("Thank you for Volunteering.");
                            this.donorUtility.changeStatus(this.donor.donationId,"Mapped")
                            .subscribe(result=>{
                              if(result)
                              this.router.navigate(['View Requests'], { replaceUrl: true });
                              else
                              alert("Server Error.Please try after sometime.")
                            },error=>alert("Server Error.Please try after sometime."));
                            
                          }
                          else
                          {
                            alert("Server Error.Please try after sometime.");
                          }
                        },error=>alert("Server Error.Please try after sometime."));
                      }
                      else
                      {
                        alert("Server Error.Please try after sometime.");
                      }
                    },error=>alert("Server Error.Please try after sometime."));
                  }
                  else
                  {
                    alert("Server Error.Please try after sometime.");
                  }
                },error=>alert("Server Error.Please try after sometime."));
              }
              else
              {
                alert("Server Error.Please try after sometime.");
              }
            },error=>alert("Server Error. Please try after sometime."));
        }
        else {
          alert("Server Error.Please try after sometime.");
        }
      }, error => alert("Server Error.Please try after sometime."));
  }

}
