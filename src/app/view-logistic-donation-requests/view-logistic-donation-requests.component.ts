import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogisticRequestServiceService } from '../logistic-request-service.service';

@Component({
  selector: 'app-view-logistic-donation-requests',
  templateUrl: './view-logistic-donation-requests.component.html',
  styleUrls: ['./view-logistic-donation-requests.component.css']
})
export class ViewLogisticDonationRequestsComponent implements OnInit {


  constructor(public logisticDonationUtility:LogisticRequestServiceService, public router: Router) { }

  requests: any;
  flag: boolean = false;
  message: string;
  request: any;
  element: HTMLElement;
  userId: String;
  detailsFlag: boolean = true;
  size:number;
  i: number = 0;
  
  public isCollapsed = new Array().fill(true);
  isStatus:boolean[]=[];
  @ViewChild('myTd') myTd: ElementRef;
  ngOnInit(): void {
    
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }
    this.logisticDonationUtility.getAllRequests()
    .subscribe(result=>{
      this.requests=result;
    },error=>alert('Server Error... Please try again...'))

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
      if (val.donationId === id) {
        // console.log(val);
        this.request = val.donationId;
        this.element = document.getElementById(this.request) as HTMLElement;
        // console.log(this.request)
        this.message = val.status;
        if(this.message=='Approved'){
          this.element.style.color="green";
        }
        else
        {
          this.element.style.color="red";
        }
        this.element.innerHTML = this.message;


      }
    }
  }


}
