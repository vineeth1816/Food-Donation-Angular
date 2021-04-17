import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '../forgot-password.service';
import { User } from '../User';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public passwordUtility:ForgotPasswordService,private route:Router) { }

  user=new User();
  message="Password Reset Failed. Please enter valid details";
  ngOnInit(): void {
  }
  
  flag:Boolean=false;
  onSubmit(myForm:NgForm){
    this.passwordUtility.ValidatePasswordReset(this.user)
    .subscribe(result=>{this.changeMsg(result);
    myForm.resetForm();},
    error=>console.log("server error"));
  }
  changeMsg(u:any){
    if(u){
    this.route.navigate(['/login/forgotpassword/passwordReset']);
    localStorage.setItem("userId",this.user.userId.toString());
    this.flag=false;
    
    }
    else
    this.flag=true;
  }

  

}


