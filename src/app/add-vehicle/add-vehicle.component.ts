import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddVehicleServiceService } from '../add-vehicle-service.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  
   v=new Vehicle();
  constructor(public addVehicleService:AddVehicleServiceService) { }
  
  ngOnInit(): void {
  }
check(){
  alert("entered");
  console.log(this.v.vehicleNo);
  this.addVehicleService.addVehicle(this.v).subscribe(result=>{
    console.log(result);
    if(result){
      alert("Vehicle is Added");
    }
    else{
      alert("notentered");
    }
  },
  error=>console.log(error))
}
}



