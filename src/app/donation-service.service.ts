import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDonationRequest } from './FoodDonationRequest';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  constructor(public httpClient:HttpClient) { }

  getAllRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllRequests',{responseType:"json"});
  }

  getRequestById(userID:String):Observable<Object>{
    return this.httpClient.post<Object>('http://localhost:8080/getrequestsById',{
      userId:userID
    },{responseType:"json"});
  }
}
