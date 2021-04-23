import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter-service.service';
import { LoginserviceService } from '../loginservice.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { User } from '../User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  successFlag: boolean = true;
  loginMessage: String = "";
  loginMessageFlagAdmin: boolean = false;
  idFlag: boolean = false;
  passFlag: boolean = false;
  loginMessageFlag: boolean = false;
  u = new User();
  userId: string = "";
  constructor(public loginService: LoginserviceService, public router: Router, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  navbarFunction() {
    this.eventEmitterService.onFirstComponentButtonClick();
  }

  validate(myForm: NgForm) {

    // alert("New user created Successfully");


    // console.log(this.u);
    this.loginService.loginUser(this.u)
      .subscribe(result => {
        // console.log(result)


        if (result.password && result.userId) {

          this.successFlag = false;
          localStorage.setItem('userId', JSON.stringify(result.userId));
          // console.log(this.userId);
          if (result.userId === "admin") {
            this.navbarFunction();
            this.router.navigate(['admin']);

          }
          else {
            this.navbarFunction();
            this.router.navigate(['user']);

          }

        }
        if (result.userId == null) {

          this.idFlag = true;
          this.passFlag = false;
        }
        if (result.userId != null && result.password == null) {

          this.passFlag = true;
          this.idFlag = false;
        }
        if (result.userId == null && result.password == null) {
          this.idFlag = true;
          this.passFlag = true;
        }
      },
        error => alert("Unable to login"));
  }
}


