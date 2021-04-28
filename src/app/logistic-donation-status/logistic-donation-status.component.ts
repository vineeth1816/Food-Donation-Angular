import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogisticRequestServiceService } from '../logistic-request-service.service';

@Component({
  selector: 'app-logistic-donation-status',
  templateUrl: './logistic-donation-status.component.html',
  styleUrls: ['./logistic-donation-status.component.css']
})
export class LogisticDonationStatusComponent implements OnInit {

  constructor(public logisticRequestUtility :LogisticRequestServiceService, public router: Router) { }

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
    
    this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    if (this.userId == "admin") {
      this.isStatus=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];

      this.detailsFlag = false;

      this.logisticRequestUtility.getAllPendingDonorRequests()
        .subscribe((response:any) =>{ console.log(response) ;this.requests = response;
          
          this.size=response.length;

          


          
          for (let i = 0; i < this.size; i++) {
            if(response[i].status=="Approved" || response[i].status=="Rejected" )
            this.isStatus[i]=false;
            
          }
        }, error => alert("Server error"));

        

    }
    else {
      this.detailsFlag = true;
      this.logisticRequestUtility.getRequestById(this.userId)
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

  changeStatus(donationId: String, status: String,i:number) {
    // this.isStatus[i]=false;

    this.logisticRequestUtility.changeStatus(donationId, status)
      .subscribe(result => {
        if (result == true){
          alert(status);
          this.ngOnInit();}
        else
          alert("buggy");
      }, error => alert("server error"));
      
  }

  addLogistics(donationId:any){
    this.router.navigate(['/addVehicle']);
    localStorage.setItem('donationId',donationId);

    
  }
 

}
