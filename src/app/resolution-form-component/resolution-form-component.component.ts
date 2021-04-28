import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../Ticket';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-resolution-form-component',
  templateUrl: './resolution-form-component.component.html',
  styleUrls: ['./resolution-form-component.component.css']
})
export class ResolutionFormComponentComponent implements OnInit {

  constructor(public router: Router, public ticketUtility: TicketServiceService) { }
  req = new Ticket();
  ngOnInit(): void {

    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }
  }


  validate(helpForm: NgForm) {
    var reqId = localStorage.getItem('resId');
    alert(this.req.resolution)
    this.req.requestId = reqId;

    this.ticketUtility.updateTicket(this.req).subscribe(result => {
      if (result) {
        this.router.navigate(['/admin']);
      }
    }, error => console.log("Server Error.... Please try again"))
  }


}
