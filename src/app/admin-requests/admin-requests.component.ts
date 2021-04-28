import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRequestsService } from '../admin-requests.service';
import { DonationrequestserviceService } from '../donationrequestservice.service';
import { FoodDonationRequest } from '../FoodDonationRequest';
import { FoodRequest } from '../FoodRequest';
import { LoginserviceService } from '../loginservice.service';
import { LogisticRequestServiceService } from '../logistic-request-service.service';
import { LogisticDonationRequest } from '../LogisticDonationRequest';
import { User } from '../User';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  constructor(public router:Router,public userUtility:LoginserviceService,public adminRequestsUtility:AdminRequestsService,public donationRequestService:DonationrequestserviceService,public loginUtility:LoginserviceService,public logDonationUtility:LogisticRequestServiceService) { }
  user1:User=new User();
  logReq:LogisticDonationRequest=new LogisticDonationRequest();
  requests:any;
  dateRequests:any;
  locationRequests:any;
  occationRequests:any;
  quantityRequests:any;
  user:User;
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
  userFlag:boolean=true;
  ngOnInit(): void {
     if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }

    this.normalFlag=true;
    this.category=localStorage.getItem("userCategory");
    if(this.category=="Food Donor"){
    this.category1="Food"
    this.userFlag=true;
    this.adminRequestsUtility.getAllRequests(this.category1)
    .subscribe(result=>{this.requests=result;
    console.log(this.category);
    console.log(result)},error=>alert("Server Error"));
  
  }
    else{
      this.category1="Logistics";
      this.userFlag=false;
      this.adminRequestsUtility.getAllAdminLogisticRequests(this.category1)
      .subscribe(result=>{
        this.requests=result;
      },error=>console.log("Server Error...."))
    }
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
  else if(type=="logisticLocation"){
    
    this.normalFlag=false;
    this.dateFlag=false;
    this.locationFlag=false;
    this.quantityFlag=false;
    this.occationFlag=false;
    this.requests.sort((a,b)=>{
      if(a.location<b.location){
        return -1;
      }
      else if(a.location>b.location){
        return 1;
      }
      else{
        return 0;
      }
    })
  }
  
  else if(type=="logisticPurpose"){
    
    this.normalFlag=false;
    this.dateFlag=false;
    this.locationFlag=false;
    this.quantityFlag=false;
    this.occationFlag=false;
    this.requests.sort((a,b)=>{
      if(a.purpose<b.purpose){
        return -1;
      }
      else if(a.purpose>b.purpose){
        return 1;
      }
      else{
        return 0;
      }
    })
  }
  this.results=this.requests;
  }

  Volunteer(request:any){
    if(this.category1=="Food"){
    this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    localStorage.setItem("volunteeredRequestId",request.requestId);
    alert(request.name);
    localStorage.setItem("volunteeredRequestName",request.name); 
    localStorage.setItem("volunteeredRequestQuantity",request.noOfPackets.toString());
    this.router.navigate(['volunteerRequestForm'], { replaceUrl: true });
    // this.Donor.name=request.name;
    // this.Donor.noOfPackets=request.noOfPackets;
    // this.Donor.status="Approved";
    // this.Donor.userId=this.userId.toString();
    // this.user.userId=this.userId.toString();
    // this.userUtility.getUser(this.user)
    // .subscribe(result=>{
    //   this.Donor.contactNo=this.user.contactNo.toString();
    //   this.Donor.location=this.user.lo
    // },error=>alert("Server Error.Please try after sometime."));
    }
    else{
      alert("Logistics flag");
      console.log(request.purpose)
      
      this.adminRequestsUtility.deleteRequest(request.requestId,"Logistics")
      .subscribe(result=>{
        if(result){
          this.user1.userId= localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
          this.loginUtility.getUser(this.user1)
          .subscribe(result=>{
            if(result){
            console.log(result);
            this.user1=result;
            var name=this.user1.firstName;
            var contactNo=this.user1.contactNo;
            alert("contact no"+this.user1.contactNo)
            this.logReq.userId=this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
            this.logReq.name=String(name);
            this.logReq.contactNo=String(contactNo);
            this.logReq.purpose=request.purpose;
            this.logReq.location=request.location;
            this.logDonationUtility.insertLogisticDonationRequest(this.logReq)
            .subscribe(result=>{
              if(result){
                this.router.navigate(['/Logistic Donation Status']);
              }
            },error=>console.log("error while inserting donation request"))
            }
          },error=>console.log("error while extracting user"))
        }
      },error=>console.log("error while deleting admin request"))

    }

  }
}
