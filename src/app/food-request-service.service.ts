import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodRequest } from './FoodRequest';

@Injectable({
  providedIn: 'root'
})
export class FoodRequestServiceService {

 constructor(public httpClient:HttpClient) { }
  insertFoodRequest(foodRequest:FoodRequest):Observable<FoodRequest>{
    return this.httpClient.post<FoodRequest>('http://localhost:8080/insertFoodRequest',{
    requestId:foodRequest.requestId,
    userId:foodRequest.userId,
    name:foodRequest.name,
    location:foodRequest.location,
    contactNo:foodRequest.contactNo,
    occation:foodRequest.occation,
    noOfPackets:foodRequest.noOfPacketsnumber,
    date:foodRequest.date,
    status:foodRequest.status
},{responseType:"json"});
  }

  getAllFoodRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllFoodRequests',{responseType:"json"});
  }





}
