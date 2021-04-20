import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationrequestserviceService } from '../donationrequestservice.service';
import { FoodDonationRequest } from '../FoodDonationRequest';

@Component({
  selector: 'app-donate-food',
  templateUrl: './donate-food.component.html',
  styleUrls: ['./donate-food.component.css']
})
export class DonateFoodComponent implements OnInit {
req=new FoodDonationRequest();
  constructor(public donationRequestService:DonationrequestserviceService,public router:Router) { }

  ngOnInit(): void {
  }
  validate(myForm:NgForm){
    console.log(this.req)
    this.req.userId=localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    this.donationRequestService.insertDonationRequest(this.req)
    .subscribe(result=>{
      console.log(result);
      alert('Request Sent Successfully');
      this.router.navigate(['/View Request'])
    },error=>console.log("Request not sent due to server error"))

  }

}
