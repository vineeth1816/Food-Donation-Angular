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
}
