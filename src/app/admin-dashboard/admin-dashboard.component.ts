import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    
    // var child=new NavBarComponent();
    // child.buttonDisable();
    // console.log(child)
    
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



}
