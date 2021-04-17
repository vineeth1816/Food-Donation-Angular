import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(public httpClient:HttpClient) { }

  registerUser(user:User):Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/register',
    {firstName:user.firstName,lastName:user.lastName,dob:user.dob,gender:user.gender,emailId:user.emailId,contactNo:user.contactNo,userCategory:user.userCategory,userId:user.userId,password:user.password,sq1:user.sq1,sq2:user.sq2,sq3:user.sq3},
    {responseType:"json"});
  }
}
