import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogisticRequestServiceService } from '../logistic-request-service.service';
import { LogisticDonationRequest } from '../LogisticDonationRequest';

@Component({
  selector: 'app-donate-logistics',
  templateUrl: './donate-logistics.component.html',
  styleUrls: ['./donate-logistics.component.css']
})
export class DonateLogisticsComponent implements OnInit {

  req = new LogisticDonationRequest();
  constructor(public logisticRequestUtility: LogisticRequestServiceService, public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }


  }
  validate(myForm: NgForm) {
    console.log(this.req)
    this.req.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    this.logisticRequestUtility.insertLogisticDonationRequest(this.req)
      .subscribe(result => {
        console.log(result);
        alert('Request Sent Successfully');
        this.router.navigate(['/Logistic Donation Status'])
      }, error => console.log("Request not sent due to server error"))

  }

}
