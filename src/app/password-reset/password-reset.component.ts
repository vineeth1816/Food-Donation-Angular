import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordResetService } from '../password-reset.service';
import { User } from '../User';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(public resetUtility:PasswordResetService,public router:Router) { }
  userId:String=localStorage.getItem('userId');
  user:User=new User();
  ngOnInit(): void {
  }

  reset(){
    this.resetUtility.setPassword(this.user)
    .subscribe(result=>this.check(result),
    error=>alert("Server busy. Password reset Failed"));
  }
  check(result:any){
    if(result==true){
      alert("Password Reset Successful");
      this.router.navigate(['/login']);
      
      
    }
    else{
      alert("Server busy. Password reset Failed");
    }
  }

}
