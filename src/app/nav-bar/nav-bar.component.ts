import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private eventEmitterService:EventEmitterService,public router:Router) { }

flag:boolean=true;
ngOnInit() {   
     
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.buttonDisable();    
      });
    }    
  }
  logoutFlag:boolean=false;
  buttonDisable(){
    alert('buttons');
    this.flag=false;
    this.logoutFlag=true;
  }
  
  validate(){
    localStorage.removeItem('userId');
    this.logoutFlag=false;
    this.flag=true;
    this.router.navigate(['/login']);
    
  }
  

}
