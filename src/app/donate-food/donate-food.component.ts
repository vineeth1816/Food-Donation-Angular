import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodDonationRequest } from '../FoodDonationRequest';

@Component({
  selector: 'app-donate-food',
  templateUrl: './donate-food.component.html',
  styleUrls: ['./donate-food.component.css']
})
export class DonateFoodComponent implements OnInit {
req=new FoodDonationRequest();
  constructor() { }

  ngOnInit(): void {
  }
  validate(myForm:NgForm){
    
  }

}
