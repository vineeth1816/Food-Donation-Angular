import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(public httpClient:HttpClient) { }

  getBlogs():Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:8080/viewAllBlogs',{responseType:"json"});
  }
}
