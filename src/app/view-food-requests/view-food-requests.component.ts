import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRequestsService } from '../admin-requests.service';
import { DonationServiceService } from '../donation-service.service';
import { FoodRequestServiceService } from '../food-request-service.service';
import { FoodDonationRequest } from '../FoodDonationRequest';
import { FoodRequest } from '../FoodRequest';
import { MappingService } from '../mapping.service';

@Component({
  selector: 'app-view-food-requests',
  templateUrl: './view-food-requests.component.html',
  styleUrls: ['./view-food-requests.component.css']
})
export class ViewFoodRequestsComponent implements OnInit {

  constructor(public foodRequestService:FoodRequestServiceService, public router: Router,public mapUtility:MappingService,public requestStatusUtility:FoodRequestServiceService,public donorStatusUtility:DonationServiceService,public adminRequestUtility:AdminRequestsService) { }

  requests: any;
  donors:any;
  flag: boolean = false;
  message: string;
  viewFlag:boolean;
  request: any;
  element: HTMLElement;
  userId: String;
  category:String;
  detailsFlag: boolean = true;
  noDonorsFlag:boolean=false;
  noOfDonors:number;
  requestFormFlag:boolean;
  size:number;
  i: number = 0;
  hideRequestsFlag:boolean=true;
  requestToBeAssignedWithDonor:FoodRequest;
  public isCollapsed = new Array().fill(true);
  isStatus:boolean[]=[];
  assignDonorFlag:boolean[]=[];
  @ViewChild('myTd') myTd: ElementRef;
  ngOnInit(): void {
    this.requestFormFlag=false;
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }
    this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    
    if (this.userId == "admin") {
      this.viewFlag=true;
      this.isStatus=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
      this.assignDonorFlag=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

      this.detailsFlag = false;

      this.foodRequestService.getAllFoodRequests()
        .subscribe((response:any) =>{ this.requests = response;
          console.log(JSON.stringify(response));
          console.log(response);
          console.log(this.requests);
          this.size=response.length;
          
          for (let i = 0; i < this.size; i++) {
            if(response[i].status=="Approved" || response[i].status=="Rejected" || response[i].status=="Mapped"){
            this.isStatus[i]=false;
            console.log(response[i].requestId);
            if(response[i].status=="Approved")
            {
              console.log(response[i].requestId);
            this.assignDonorFlag[i]=true;
            }

            // if(response[i].status=="Assigned")
            // this.assignDonorFlag[i]=false;

            // if(response[i].status=="Mapped")
            //   response.splice(i,1);
            
            }

            
            
          }
        }, error => alert("Server error"));

        

    }
    else {
      this.viewFlag=false;
      this.detailsFlag = true;
      this.foodRequestService.getFoodRequestById(this.userId)
        .subscribe(result => this.requests = result, error => alert("Server error"));
    }
  }
  viewStatus(id: number) {
    if (this.element == undefined) {

      this.displayStatusMessage(id);



    }
    else {
      this.element.innerHTML = "";
      this.displayStatusMessage(id);
    }
  }
  displayStatusMessage(id: number) {
    this.flag = true;
    console.log(id);
    for (var val of this.requests) {
      if (val.requestId === id) {
        // console.log(val);
        this.request = val.requestId;
        this.element = document.getElementById(this.request) as HTMLElement;
        // console.log(this.request)
        this.message = val.status;
        if(this.message=='Approved'){
          this.element.style.color="orange";
        }
        else if(this.message=='Mapped'){
          this.element.style.color="green"
        }
        else
        {
          this.element.style.color="red";
        }
        this.element.innerHTML = this.message;


      }
    }
  }

  changeStatus(requestId: String, status: String) {
    // this.isStatus[i]=false;

    this.foodRequestService.changeStatus(requestId, status)
      .subscribe(result => {
        if (result == true){
          alert(status);
          this.ngOnInit();}
        else
          alert("Status Updation failed");
      }, error => alert("server error"));
      
  }

  viewDonors(r:FoodRequest){
    
    this.hideRequestsFlag=false;
    
    this.requestToBeAssignedWithDonor=r;
    this.foodRequestService.getAllApprovedDonors()
    .subscribe(
      result=>{this.donors=result;
        // if(Object.keys(result).length==0)
        this.noDonorsFlag=true;
      },error=>alert("Server Error")
    );
  }
  mapDonor(requestToBeAssignedWithDonor:FoodRequest,donor:FoodDonationRequest){
    
    this.category="Food";

    this.adminRequestUtility.checkRequest(requestToBeAssignedWithDonor.requestId,this.category)
    .subscribe(result=>{
      if(result)
      {this.adminRequestUtility.deleteRequest(requestToBeAssignedWithDonor.requestId,this.category)
      .subscribe(result=>{
        console.log("true");
      },error=>alert("Server Error.Please try after sometime"));
      
      }
    },error=>alert("Server Error. Please try after sometime."));
    

    this.mapUtility.mapRequestDonor(requestToBeAssignedWithDonor,donor)
    .subscribe(result=>{
      if(result)
      {
      alert("success");
      this.requestStatusUtility.changeStatus(requestToBeAssignedWithDonor.requestId,"Mapped")
      .subscribe(result=>{
        if(result)
        this.donorStatusUtility.changeStatus(donor.donationId,"Mapped")
        .subscribe(result=>{
          if(result)
          this.router.navigate(['mappedRequests']);
          else
          alert("Mapping Failed");
        },error=>alert("Server Error"));
      },error=>alert("Server Error"));
     

      }
      else
      alert("failed");
    },error=>alert("server error"));
  }

  viewAllRequests(){
    this.hideRequestsFlag=true;
  }

  viewRequestForm(){
    this.requestFormFlag=true;
  }

  raiseRequest(foodForm:NgForm){
    this.foodRequestService.insertAdminFoodRequest(this.requestToBeAssignedWithDonor.requestId,"Food")
    .subscribe(result=>{
      if(result){  
      alert("Request Raised Successfully");
      this.router.navigate(['/Dashboard'], { replaceUrl: true });
    }
    else
    alert("Request Already Raised");

    },error=>alert("Server Error"));
    
  }

  }
