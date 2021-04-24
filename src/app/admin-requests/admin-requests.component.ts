import { Component, OnInit } from '@angular/core';
import { AdminRequestsService } from '../admin-requests.service';
import { DonationrequestserviceService } from '../donationrequestservice.service';
import { FoodDonationRequest } from '../FoodDonationRequest';
import { FoodRequest } from '../FoodRequest';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  constructor(public adminRequestsUtility:AdminRequestsService,public donationRequestService:DonationrequestserviceService) { }

  requests:any;
  dateRequests:any;
  locationRequests:any;
  occationRequests:any;
  quantityRequests:any;
  category:string;
  category1:string;
  sortBy:String;
  results:any;
  Donor:FoodDonationRequest;
  normalFlag:boolean=true;
  dateFlag:boolean=false;
  locationFlag:boolean=false;
  quantityFlag:boolean=false;
  occationFlag:boolean=false;
  userId:String;
  ngOnInit(): void {
    this.normalFlag=true;
    this.category=localStorage.getItem("userCategory");
    if(this.category=="Food Donor")
    this.category1="Food"
    else
    this.category1="Logistics"
    this.adminRequestsUtility.getAllRequests(this.category1)
    .subscribe(result=>{this.requests=result;
    console.log(this.category);
    console.log(result)},error=>alert("Server Error"));
  }

  sort(type:string){
  if(type=="date"){
    this.normalFlag=false;
      this.dateFlag=true;
      this.locationFlag=false;
      this.quantityFlag=false;
      this.occationFlag=false;
      this.sortBy="Date";
      this.adminRequestsUtility.getAllRequestsOrderByColumn(this.category1,this.sortBy)
      .subscribe(result=>this.dateRequests=result,error=>alert("Server Error.Please try after sometime."));

  }
  else if(type=="location"){
    this.normalFlag=false;
    this.dateFlag=false;
    this.locationFlag=true;
    this.quantityFlag=false;
    this.occationFlag=false;
    this.sortBy="Location";
    this.adminRequestsUtility.getAllRequestsOrderByColumn(this.category1,this.sortBy)
    .subscribe(result=>this.locationRequests=result,error=>alert("Server Error.Please try after sometime."));


  }else if(type=="quantity"){
    this.normalFlag=false;
    this.dateFlag=false;
    this.locationFlag=false;
    this.quantityFlag=true;
    this.occationFlag=false;
    this.sortBy="NoOfPackets";
    this.adminRequestsUtility.getAllRequestsOrderByColumn(this.category1,this.sortBy)
    .subscribe(result=>this.quantityRequests=result,error=>alert("Server Error.Please try after sometime."));

  }else if(type==="occation"){
    this.normalFlag=false;
    this.dateFlag=false;
    this.locationFlag=false;
    this.quantityFlag=false;
    this.occationFlag=true;
    this.sortBy="Occation";
    this.adminRequestsUtility.getAllRequestsOrderByColumn(this.category1,this.sortBy)
    .subscribe(result=>this.occationRequests=result,error=>alert("Server Error.Please try after sometime."));

  }
  this.results=this.requests;
  }

  Volunteer(request:FoodRequest){
    this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    this.Donor.name=request.name;
    this.Donor.noOfPackets=request.noOfPackets;
    this.Donor.status="Approved";
    this.Donor.userId=this.userId.toString();


  }
}
