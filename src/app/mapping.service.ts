import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDonationRequest } from './FoodDonationRequest';
import { FoodRequest } from './FoodRequest';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor(public httpClient:HttpClient) { }

  mapRequestDonor(foodRequest:FoodRequest,foodDonationRequest:FoodDonationRequest):Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/mapRequestToDonor/'+foodRequest.requestId+'/'+foodDonationRequest.donationId,{responseType:"json"});
  }
}
