import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  constructor(public httpClient:HttpClient) { }

  getAllRequests():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/getAllRequests',{responseType:"json"});
  }
}
