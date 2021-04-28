import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRequestsService {

  constructor(public httpClient:HttpClient) { }


  public getAllRequests(category:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/getAllAdminFoodRequests/"+category,{responseType:"json"});
  }
  public getAllRequestsOrderByColumn(category:String,column:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/getAllAdminFoodRequestsOrderBy/"+category+"/"+column,{responseType:"json"});
  }
  

  public checkRequest(requestId:String,category:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/checkRequestId/"+requestId+"/"+category,{responseType:"json"});
  }

  public deleteRequest(requestId:String,category:String):Observable<Object>{
    return this.httpClient.delete<Object>("http://localhost:8080/deleteRequest/"+requestId+"/"+category,{responseType:"json"});
  }


  /*
  *this method is used to insert
  *admin logistic request into 
  *admin requests table with category 'logistics'
  */
  insertAdminLogisticRequest(requestID:String,category:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/insertAdminRequest/"+requestID+"/"+category,{responseType:"json"});
  }

  public getAllAdminLogisticRequests(category:String):Observable<Object>{
    return this.httpClient.get<Object>("http://localhost:8080/getAllAdminLogisticRequests/"+category,{responseType:"json"});
  }

}
