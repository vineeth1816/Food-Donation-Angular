import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDonationRequest } from './FoodDonationRequest';

@Injectable({
  providedIn: 'root'
})
export class DonationrequestserviceService {

  constructor(public httpClient:HttpClient) { }
  insertDonationRequest(foodDonationRequest:FoodDonationRequest):Observable<FoodDonationRequest>{
    return this.httpClient.post<FoodDonationRequest>('http://localhost:8080/insertDonationRequest',{
    userId:foodDonationRequest.userId,
    name:foodDonationRequest.name,
    location:foodDonationRequest.location,
    contactNo:foodDonationRequest.contactNo,
    purpose:foodDonationRequest.purpose,
    noOfPackets:foodDonationRequest.noOfPacketsnumber
    
},{responseType:"json"});
  }
}
