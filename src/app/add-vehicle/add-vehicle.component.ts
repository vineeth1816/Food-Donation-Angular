import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddVehicleServiceService } from '../add-vehicle-service.service';
import { LogisticRequestServiceService } from '../logistic-request-service.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  v = new Vehicle();
  constructor(public addVehicleService: AddVehicleServiceService, public logisticdonationUtility: LogisticRequestServiceService, public router: Router) { }

  ngOnInit(): void {
    
    if (localStorage.getItem('userId') == null) {
      this.router.navigate(['/login']);
    }
  }
  check() {
    console.log(this.v.vehicleNo);
    this.addVehicleService.addVehicle(this.v).subscribe(result => {
      if (result) {
        alert("Vehicle is Added");
        let donationId = localStorage.getItem('donationId');
        this.logisticdonationUtility.changeStatus(donationId, "Completed")
          .subscribe(result => {
            if (result) {
              localStorage.removeItem('donationId')
              this.router.navigate(['/Logistic Donation Requests']);
            }
          })

      }
      else {
        alert("notentered");
      }
    },
      error => console.log(error))
  }
}



