import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DonationServiceService } from '../donation-service.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router:Router,public donationService:DonationServiceService) { }
size:number;
pendingCount:number=0;
  ngOnInit(): void {
    
    // var child=new NavBarComponent();
    // child.buttonDisable();
    // console.log(child)
    
    this.donationService.getAllRequests()
    .subscribe((response:any) =>{ 
      
      this.size=response.length;
      
      for (let i = 0; i < this.size; i++) {
        if(response[i].status=="Pending for Approval"){
          this.pendingCount=this.pendingCount+1;
        }
      }
    });
    
    if(localStorage.getItem('userId')==null){
      this.router.navigate(['/login']);
    }

    
  }
  viewBlogs(){
    this.router.navigate(['/adminBlogs']);
  }
  viewDonationRequests(){
    this.router.navigate(['/View Requests']);
  }
  raiseFoodRequest(){
    this.router.navigate(['Request Food']);
    this.router.navigate(['/View Requests']);
  }
  viewFoodRequests(){
    
    this.router.navigate(['Food requests']);
  }



}
