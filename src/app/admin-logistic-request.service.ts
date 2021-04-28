import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogisticRequest } from './LogisticRequest';

@Injectable({
  providedIn: 'root'
})
export class AdminLogisticRequestService {
constructor(public httpClient:HttpClient) { }
  insertLogisticRequest(logisticRequest:LogisticRequest):Observable<LogisticRequest>{
    return this.httpClient.post<LogisticRequest>('http://localhost:8080/insertLogisticRequest',{
    requestId:logisticRequest.requestId,
    location:logisticRequest.location,
    contactNo:logisticRequest.contactNo,
    purpose:logisticRequest.purpose, 
    status:logisticRequest.status
},{responseType:"json"});
  }
}
