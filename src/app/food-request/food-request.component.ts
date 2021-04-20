import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodRequestServiceService } from '../food-request-service.service';
import { FoodDonationRequest } from '../FoodDonationRequest';
import { FoodRequest } from '../FoodRequest';

@Component({
  selector: 'app-food-request',
  templateUrl: './food-request.component.html',
  styleUrls: ['./food-request.component.css']
})
export class FoodRequestComponent implements OnInit {

req=new FoodRequest();
  constructor(public foodRequestService:FoodRequestServiceService,public router:Router) { }


  ngOnInit(): void {
     if(localStorage.getItem('userId')==null){
      this.router.navigate(['/login']); 
    }
   
    
  }
  validate(myForm:NgForm){
    console.log(this.req)
    this.foodRequestService.insertDonationRequest(this.req)
    .subscribe(result=>{
      console.log(result);
      alert('Request Sent Successfully');
      this.router.navigate(['/View Request'])
    },error=>console.log("Request not sent due to server error"))

  }
}
