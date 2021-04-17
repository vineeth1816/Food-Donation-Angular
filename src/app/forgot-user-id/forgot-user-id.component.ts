import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ForgotuseridServiceService } from '../forgotuserid-service.service';
import { User } from '../User';


@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  constructor(public forgotuseridService:ForgotuseridServiceService) { }
fu= new User()
uidFlag:boolean=true;
uid:string="";
uidMessage:boolean=false;
invalidIdFlag:boolean=false;
  ngOnInit(): void {
  }

check(){
  console.log(this.fu.contactNo,this.fu.emailId,this.fu.sq1,this.fu.sq2,this.fu.sq3)
  this.forgotuseridService.getUser(this.fu).subscribe(result=>{
    console.log(result);
    if(result.userId!=null){
      this.uidFlag=false;
      this.uidMessage=true;
      this.uid="Your user id is "+result.userId;

    }
    else{
      alert("invalid credentials")
      this.invalidIdFlag=true;
      this.fu.contactNo="";
      this.fu.emailId="";
      this.fu.sq2="";
      this.fu.sq1="";
      this.fu.sq3="";

    }
  },
  error=>console.log(error))
}
}
