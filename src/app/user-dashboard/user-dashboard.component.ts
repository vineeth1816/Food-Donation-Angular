import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')==null){
      this.router.navigate(['/login']);
      
    }
  }
  validate(){
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

}
