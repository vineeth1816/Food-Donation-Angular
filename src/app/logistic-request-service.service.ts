import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogisticDonationRequest } from './LogisticDonationRequest';

@Injectable({
  providedIn: 'root'
})
export class LogisticRequestServiceService {

 constructor(public httpClient:HttpClient) { }
  insertLogisticDonationRequest(logisticRequest:LogisticDonationRequest):Observable<LogisticDonationRequest>{
    return this.httpClient.post<LogisticDonationRequest>('http://localhost:8080/insertLogisticDonationRequest',{
    requestId:logisticRequest.requestId,
    userId:logisticRequest.userId,
    name:logisticRequest.name,
    location:logisticRequest.location,
    contactNo:logisticRequest.contactNo,
    purpose:logisticRequest.purpose, 
    status:logisticRequest.status
},{responseType:"json"});
  }
  
  getAllRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllLogisticDonationRequests',{responseType:"json"});
  }
  
  getAllPendingDonorRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllPendingLogisticDonationRequests',{responseType:"json"});
  }
  
  getRequestById(userID:String):Observable<Object>{
    return this.httpClient.post<Object>('http://localhost:8080/getLogisticDonationRequestsById',{
      userId:userID
    },{responseType:"json"});
  }

  changeStatus(donationID:String,Status:String):Observable<Object>{
    return this.httpClient.post<Object>('http://localhost:8080/changeStatusLogisticDonationRequest',{
      donationId:donationID,status:Status
    },{responseType:"json"});
  }


}
