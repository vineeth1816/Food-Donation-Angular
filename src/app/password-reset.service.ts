import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(public httpClient:HttpClient) { }

  setPassword(user:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/setPassword',
    {
      "firstName": null, 
      "lastName": null,
      "dob":null,
      "gender":null,
      "emailId":null,
      "contactNo":null,
      "userCategory":null,
  "userId":localStorage.getItem("userId"),
  "password":user.password,
  "sq1":null,
  "sq2":null,
  "sq3":null
  },
    {responseType:"json"});
  }
}
