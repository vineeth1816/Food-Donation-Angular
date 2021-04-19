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

  flag: boolean = true;
  featureFlag: boolean = false;
  user = new User();
  ngOnInit() {
    this.featureFlag=true;
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
  buttonDisable() {
    this.flag = false;
    this.logoutFlag = true;



    this.user.userId = localStorage.getItem('userId').substr(1, localStorage.getItem('userId').length - 2);
    if (this.user.userId == "admin")
      this.featureFlag = false;
    else
      this.featureFlag = true;

    console.log(this.user);

    this.loginService.getUser(this.user)
      .subscribe(result => {
        this.message = "Welcome, " + result.firstName + " " + result.lastName;
        this.userCategory = result.userCategory;
        console.log(this.userCategory);
        console.log(result);
        console.log(this.featureFlag);
        if (this.userCategory == "Food Donor") {
          console.log("inside Food Donor")
          this.featureFlag = true;
          this.requestOption = "Donate Food";
          this.requestStatus = "Donation Status";
        }
        else if (this.userCategory == "NGO PoC") {
          this.featureFlag = true;
          this.requestOption = "Request Food";
          this.requestStatus = "Request Status";
        } else if (this.userCategory == "Logistics Sponser") {
          console.log("inside logistics");
          this.featureFlag = true;
          this.requestOption = "Sponsor Logistics";
          this.requestStatus = "Sponser Status";
        }
        else {
          console.log("all failed");
        }
      },
        error => this.message = "lollll");

  }

  validate() {
    this.featureFlag = false;
    localStorage.removeItem('userId');
    this.logoutFlag = false;
    this.flag = true;
    this.router.navigate(['/login']);

  }


}
