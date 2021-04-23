import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogServiceService } from '../blog-service.service';
import { EventEmitterService } from '../event-emitter-service.service';
import { ForgotuseridServiceService } from '../forgotuserid-service.service';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService, public router: Router, public loginService: LoginserviceService) { }
  blogsFlag:boolean=true;
  flag: boolean = true;
  featureFlag: boolean = false;
  loginFlag:boolean=true;
  registerFlag:boolean=true;
  user = new User();
  ngOnInit() {
    this.loginFlag=true;
    this.registerFlag=true;
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((name: string) => {
          this.buttonDisable();
        });
    }
  }
  logoutFlag: boolean = false;
  message: string = "Welcome";
  userCategory: String;
  requestOption: String;
  requestStatus: String;
  adminRequests:String;
  userId:String;
  buttonDisable() {
    this.flag = false;
    this.logoutFlag = true;
    this.featureFlag=true;
    this.loginFlag=false;
    
    this.user.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
   this.userId=this.user.userId;

    // console.log(this.user);

    this.loginService.getUser(this.user)
      .subscribe(result => {
        this.message = "Welcome, " + result.firstName + " " + result.lastName;
        this.userCategory = result.userCategory;
        // console.log(this.userCategory);
        // console.log(result);
        // console.log(this.featureFlag);
        if (this.userCategory == "Food Donor") {
          // console.log("inside Food Donor")
          this.featureFlag = true;
          this.requestOption = "Donate Food";
          this.requestStatus = "View Requests";
          this.adminRequests="Admin Requests"
        }
        else if (this.userCategory == "NGO PoC") {
          this.featureFlag = true;
          this.requestOption = "Request Food";
          this.requestStatus = "Request Status";
          this.adminRequests="Admin Requests"
        } else if (this.userCategory == "Logistics Sponser") {
          console.log("inside logistics");
          this.featureFlag = true;
          this.requestOption = "Sponsor Logistics";
          this.requestStatus = "Sponser Status";
          this.adminRequests="Admin Requests"
        }
        else if(this.userCategory=="Admin"){
          this.requestOption="Dashboard";
          // this.requestOption="Dashboard";
          this.featureFlag=true;
          this.blogsFlag=false;
          
        }
      },
        error => this.message = "lollll");

  }

  validate() {
    
    this.requestOption=null;
    this.requestStatus=null;
    this.adminRequests=null;
    this.featureFlag = false;
    this.registerFlag=true;
    localStorage.removeItem('userId');
    this.userId=null;
    this.logoutFlag = false;
    this.flag = true;
    this.loginFlag=true;
    this.router.navigate(['/']);

  }

  login(){
    
    this.loginFlag=false;
    this.router.navigate(['/login']);
    this.registerFlag=true;
  }
  
  home(){
    
    if(this.userId==null)
    {
    this.loginFlag=true;
      this.registerFlag=true;
    }
    this.router.navigate(['']);
  }
  register(){
    
    this.registerFlag=false;
    this.router.navigate(['/register']);
    this.loginFlag=true;
  }


}
