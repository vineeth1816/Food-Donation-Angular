import { Component, OnInit } from '@angular/core';
import { AdminRequestsService } from '../admin-requests.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  constructor(public adminRequestsUtility:AdminRequestsService) { }

  requests:any;
  category:string;
  category1:string
  ngOnInit(): void {
    this.category=localStorage.getItem("userCategory");
    if(this.category=="Food Donor")
    this.category1="Food"
    else
    this.category1="Logistics"
    this.adminRequestsUtility.getAllRequests(this.category1)
    .subscribe(result=>{this.requests=result;
    console.log(this.category);
    console.log(result)},error=>alert("Server Error"));

  }

}
