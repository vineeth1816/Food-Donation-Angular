import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../Ticket'
import { TicketServiceService } from '../ticket-service.service';
@Component({
  selector: 'app-raise-help-request',
  templateUrl: './raise-help-request.component.html',
  styleUrls: ['./raise-help-request.component.css']
})
export class RaiseHelpRequestComponent implements OnInit {
  requests: any;

  donors: any;
  flag: boolean = false;
  message: string;
  viewFlag: boolean;
  request: any;
  element: HTMLElement;
  userId: String;
  category: String;
  detailsFlag: boolean = true;
  noDonorsFlag: boolean = false;
  noOfDonors: number;
  requestFormFlag: boolean;
  size: number;
  i: number = 0;
  hideRequestsFlag: boolean = true;

  public isCollapsed = new Array().fill(true);
  isStatus: boolean[] = [];
  assignDonorFlag: boolean[] = [];

  constructor(public ticketUtility: TicketServiceService, public router: Router) { }
  req: Ticket = new Ticket();
  ngOnInit(): void {

    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }
    this.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);


    this.viewFlag = true;
    this.isStatus = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    this.assignDonorFlag = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    this.detailsFlag = false;

    this.ticketUtility.getAllRequests().subscribe(result => {
      this.requests = result;
    })
  }
  validate(helpForm: NgForm) {
    this.req.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    this.ticketUtility.insertTicket(this.req).subscribe(result => {
      if (result) {
        alert("successfully raised ticket");
        this.router.navigate(['/user']);
      }
    })
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
      if (val.requestId === id) {
        // console.log(val);
        this.request = val.requestId;
        this.element = document.getElementById(this.request) as HTMLElement;
        // console.log(this.request)
        this.message = val.status;
        if (this.message == 'Approved') {
          this.element.style.color = "orange";
        }
        else if (this.message == 'Mapped') {
          this.element.style.color = "green"
        }
        else {
          this.element.style.color = "red";
        }
        this.element.innerHTML = this.message;


      }
    }
  }


}
