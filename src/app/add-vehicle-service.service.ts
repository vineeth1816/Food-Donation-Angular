import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './Vehicle';

@Injectable({
  providedIn: 'root'
})
export class AddVehicleServiceService {

  constructor(public httpClient:HttpClient) {
    
    
   }
   addVehicle(v:Vehicle):Observable<Vehicle>{
    return this.httpClient.post<Vehicle>('http://localhost:8080/addLogistics',
    {vehicleNo:v.vehicleNo,driverName:v.driverName,location:v.location},
    {responseType:"json"});}

    
  getAllVehicles(donationId:string):Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllAvailableLogistics/'+donationId,{responseType:"json"});
  }
  assignVehicle(donationId:string,requestId:string,vehicleNo:string):Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/updateVehicle/'+vehicleNo+'/'+donationId+'/'+requestId
    ,{responseType:"json"});
  }

  }







