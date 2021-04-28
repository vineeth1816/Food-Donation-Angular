import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  u = new User();
  constructor(public registerServcie:RegisterServiceService,public route:Router) { }

  ngOnInit(): void {
    
  }

  validate(myForm:NgForm){
    console.log(myForm);
    if(myForm.form.invalid)
    alert("Please update the highlighted madatory field(s).");
    else
    {
    // alert("New user created Successfully");
    
    this.registerServcie.registerUser(this.u)
    .subscribe(result=>{alert("New User Created Successfully.");
  this.route.navigate(['/login']);},
    error=>alert("Username already exists. Please choose other username"));
    }
  }
  onOptionsSelected($event){
    this.u.userCategory=$event;
    
   }
    assignGender(g:String){
      this.u.gender=g;
    }

}
