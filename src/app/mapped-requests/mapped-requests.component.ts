import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVehicleServiceService } from '../add-vehicle-service.service';
import { MappingService } from '../mapping.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-mapped-requests',
  templateUrl: './mapped-requests.component.html',
  styleUrls: ['./mapped-requests.component.css']
})
export class MappedRequestsComponent implements OnInit {
  vehiclesFlag: boolean=false;
  reqId:string="";
  donId:string="";
  logisticRequestFlag=false;
  constructor(public mappingUtility:MappingService,public addVehicleUtility:AddVehicleServiceService,public router:Router) { }
vehicles:any;
requests:any;
  ngOnInit(): void {
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);

    }

    this.mappingUtility.getAllRequests()
    .subscribe(result=>{
      this.requests=result;
        console.log(result)
    },error=>console.log("server error...... "))
  }
  assignLogistics(donationId:string,requestId:string){
    this.donId=donationId;
    this.reqId=requestId;
    this.vehiclesFlag=true;
     this.addVehicleUtility.getAllVehicles(donationId)
     .subscribe(result=>{
       if(Object.keys(result).length==0){
         this.logisticRequestFlag=true;
       }
       this.vehicles=result;
       
      
     },error=>console.log("Server Error ......"))
  }
  assignVehicle(vehicleNo:string){
      this.addVehicleUtility.assignVehicle(this.donId,this.reqId,vehicleNo)
      .subscribe(result=>{
        if(result){
          this.router.navigate(['/admin']);
        }
        
      },error=>console.log('Server Error...........'))
  }
  raiseLogisticRequest(){
    this.router.navigate(['/logisticRequestAdmin'])
  }

}
