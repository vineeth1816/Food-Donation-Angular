import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userId:string;
  s1:string;
  s2:string;
  s3:string;
  
  onSubmit(){
    console.log(this.userId +this.s1)
  }

}
