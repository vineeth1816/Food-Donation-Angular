import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotuseridServiceService } from '../forgotuserid-service.service';
import { User } from '../User';


@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  constructor(public forgotuseridService: ForgotuseridServiceService, public route: Router) { }
  fu = new User();
  invalidIdFlag: boolean = false;
  ngOnInit(): void {
  }

  check() {
    console.log(this.fu.contactNo, this.fu.emailId, this.fu.sq1, this.fu.sq2, this.fu.sq3)
    this.forgotuseridService.getUser(this.fu).subscribe(result => {
      console.log(result);
      if (result.userId != null) {
        alert("Your user ID is " + result.userId);
        this.route.navigate(['/login']);

      }
      else {
        alert("invalid credentials")
        this.invalidIdFlag = true;
        this.fu.contactNo = "";
        this.fu.emailId = "";
        this.fu.sq2 = "";
        this.fu.sq1 = "";
        this.fu.sq3 = "";

      }
    },
      error => console.log(error))
  }
}
