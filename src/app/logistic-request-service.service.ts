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
}
