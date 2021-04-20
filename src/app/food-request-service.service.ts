import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodRequest } from './FoodRequest';

@Injectable({
  providedIn: 'root'
})
export class FoodRequestServiceService {

 constructor(public httpClient:HttpClient) { }
  insertDonationRequest(foodDonationRequest:FoodRequest):Observable<FoodRequest>{
    return this.httpClient.post<FoodRequest>('http://localhost:8080/insertFoodRequest',{
    requestId:foodDonationRequest.requestId,
    userId:foodDonationRequest.userId,
    name:foodDonationRequest.name,
    location:foodDonationRequest.location,
    contactNo:foodDonationRequest.contactNo,
    purpose:foodDonationRequest.occation,
    noOfPackets:foodDonationRequest.noOfPacketsnumber,
    date:foodDonationRequest.date,
    status:foodDonationRequest.status
},{responseType:"json"});
  }}
