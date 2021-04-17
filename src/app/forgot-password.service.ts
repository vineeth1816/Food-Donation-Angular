import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(public httpClient:HttpClient) { }

  ValidatePasswordReset(user:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/validatePasswordReset',
    {userId:user.userId,sq1:user.sq1,sq2:user.sq2,sq3:user.sq3},
    {responseType:"json"});
  }
}
