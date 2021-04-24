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
    noOfPackets:foodRequest.noOfPackets,
    date:foodRequest.date,
    status:foodRequest.status
},{responseType:"json"});
  }

  getAllFoodRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllFoodRequests',{responseType:"json"});
  }


  getFoodRequestById(userID:String):Observable<Object>{
    return this.httpClient.post<object>('http://localhost:8080/getFoodRequestById',{userId:userID},{responseType:"json"});
  }

  changeStatus(requestID:String,Status:String):Observable<Object>{
    return this.httpClient.post<Object>('http://localhost:8080/changeFoodRequestStatus',{
      requestId:requestID,status:Status
    },{responseType:"json"});
  }

  getAllApprovedDonors():Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/getAllApprovedDonors",{responseType:"json"});
  }

  insertAdminFoodRequest(requestID:String,category:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/insertAdminRequest/"+requestID+"/"+category,{responseType:"json"});
  }


}
