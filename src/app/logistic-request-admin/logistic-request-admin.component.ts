import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogisticRequestService } from '../admin-logistic-request.service';
import { AdminRequestsService } from '../admin-requests.service';
import { LogisticRequest } from '../LogisticRequest';

@Component({
  selector: 'app-logistic-request-admin',
  templateUrl: './logistic-request-admin.component.html',
  styleUrls: ['./logistic-request-admin.component.css']
})
export class LogisticRequestAdminComponent implements OnInit {

 req=new LogisticRequest();
  constructor(public logisticRequestUtility:AdminLogisticRequestService,public router:Router,public adminrequestUtility:AdminRequestsService) { }

  ngOnInit(): void {
     if(localStorage.getItem('userId')==null){
      this.router.navigate(['/login']); 
     }
    
    
  }
  validate(myForm:NgForm){
    console.log(this.req)
    this.logisticRequestUtility.insertLogisticRequest(this.req)
    .subscribe(result=>{
      console.log(result);
      alert('Request Sent Successfully');
      this.adminrequestUtility.insertAdminLogisticRequest(result.requestId,'Logistics')
      .subscribe(result=>console.log(result+"from admin requests"),error=>console.log("Server Error....."));
      this.router.navigate(['/admin'])
    },error=>console.log("Request not sent due to server error"))

  }
}
