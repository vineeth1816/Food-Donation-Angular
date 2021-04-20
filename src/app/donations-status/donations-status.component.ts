import { mergeAnalyzedFiles } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DonationServiceService } from '../donation-service.service';

@Component({
  selector: 'app-donations-status',
  templateUrl: './donations-status.component.html',
  styleUrls: ['./donations-status.component.css']
})
export class DonationsStatusComponent implements OnInit {

  constructor(public donationService:DonationServiceService,public router:Router) { }

  requests:any;
  flag:boolean=false;
  message:string;
  request:any;
  element:HTMLElement;
  userId:String;
  detailsFlag:boolean=true;
  
       @ViewChild('myTd') myTd:ElementRef;  
      ngOnInit(): void {
 if(localStorage.getItem('userId')==null){
      this.router.navigate(['/login']);
      
    }
    this.userId=localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    if(this.userId=="admin"){
      this.detailsFlag=false;
    this.donationService.getAllRequests()
    .subscribe(result=>this.requests=result,error=>alert("Server error"));
    }
    else
    {
      this.detailsFlag=true;
      this.donationService.getRequestById(this.userId)
      .subscribe(result=>this.requests=result,error=>alert("Server error"));
    }
  }
  viewStatus(id:number){
    if(this.element==undefined){
     
    this.displayStatusMessage(id);
  

      
    }
    else{
      this.element.innerHTML="";
      this.displayStatusMessage(id);
    }
  }
  displayStatusMessage(id:number){
      this.flag=true;
    console.log(id);
    for (var val of this.requests) {
      if(val.donationId===id){
        console.log(val);
        this.request=val.donationId;
        this.element=document.getElementById(this.request) as HTMLElement;
        console.log(this.request)
        this.message=val.status;
        this.element.innerHTML=this.message;
        

      } 
    }
  }

}
