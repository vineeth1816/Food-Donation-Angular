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
  getBlog(blog:Blog):Observable<Blog>{
    return this.httpClient.get<Blog>('http://localhost:8080//getBlog/'+blog.blog_ID,{responseType:"json"});
  }

  insertBlog(blog:Blog):Observable<Object>{
    return this.httpClient.post<Object>('http://localhost:8080/addBlog',{blog_Title:blog.blog_Title,description:blog.description},{responseType:"json"});
  }
  updateBlog(blog:Blog):Observable<Blog>{ 
    return this.httpClient.put<Blog>('http://localhost:8080/updateBlog',
    {blog_ID:blog.blog_ID,blog_Title:blog.blog_Title,description:blog.description},
    {responseType:"json"});
  }


  deleteBlog(blog:Blog):Observable<Blog>{ 
    return this.httpClient.delete<Blog>('http://localhost:8080/deleteBlog/'+blog.blog_ID,
    {responseType:"json"});
  }

  
}
