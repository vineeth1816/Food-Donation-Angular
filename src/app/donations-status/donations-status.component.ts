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
  flag:boolean=false;
  message:string;
  userId:String;
  
  ngOnInit(): void {
     this.userId=localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    if(this.userId=="admin")
    {
    this.donationService.getAllRequests()
    .subscribe(result=>this.requests=result,error=>alert("Server error"));
    }
    else
    {
      this.donationService.getRequestById(this.userId)
      .subscribe(result=>this.requests=result,error=>alert("Server error"));
    }
  }
  viewStatus(id:number){
    this.flag=true;
    console.log(id);
    for (var val of this.requests) {
      if(val.donationId===id){
        console.log(val);
        this.message=val.status;
      } // prints values: 10, 20, 30, 40
    }
  }

}
