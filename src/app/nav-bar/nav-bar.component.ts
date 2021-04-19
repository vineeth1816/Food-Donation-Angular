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

  constructor(private eventEmitterService:EventEmitterService,public router:Router,public loginService:LoginserviceService) { }

flag:boolean=true;
user=new User();
ngOnInit() {   
     
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.buttonDisable();    
      });
    }    
  }
  logoutFlag:boolean=false;
  message:string="Welcome";
  buttonDisable(){
    this.flag=false;
    this.logoutFlag=true;
    
    
    this.user.userId=localStorage.getItem('userId').substr(1,localStorage.getItem('userId').length-2);
    console.log(this.user);
    
    this.loginService.getUser(this.user)
    .subscribe(result=> this.message="Welcome, "+result.firstName+" "+result.lastName,
    error=>this.message="lollll");

  }
  
  validate(){
    localStorage.removeItem('userId');
    this.logoutFlag=false;
    this.flag=true;
    this.router.navigate(['/login']);
    
  }
  

}
