import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-help-requests',
  templateUrl: './help-requests.component.html',
  styleUrls: ['./help-requests.component.css']
})
export class HelpRequestsComponent implements OnInit {

  constructor(public helpUtility: TicketServiceService, public router: Router) { }
  requests: any;
  ngOnInit(): void {
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }

    this.helpUtility.getAllRequests().subscribe(result => {
      this.requests = result;
    })
  }
  resolution(reqId: any) {
    alert(reqId)
    localStorage.setItem('resId', reqId)
    this.router.navigate(['resolution']);
  }

}
