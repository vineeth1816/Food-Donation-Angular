import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public router:Router,public blogUtility:BlogServiceService) { }

  homeFlag:boolean=true;
  viewFlag:boolean=false;
  blogs:any;
  blog=new Blog();

  ngOnInit(): void {
    if((localStorage.getItem('userId')==null) || (localStorage.getItem('userId').includes('admin'))){
      this.router.navigate(['/login']); 
    }
    else{
      // console.log("logged in")
      this.populateBlogs();
    }
  }
  validate(){
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
  populateBlogs(){
    this.viewFlag=false;
    this.homeFlag=true;
        this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    // console.log(this.blogs[0]);
  },error=>console.log("Server error"));
  }

  viewBlog(id:number){
    this.viewFlag=true;
    this.homeFlag=false;
    this.blog.blog_ID=id;
    this.blogUtility.getBlog(this.blog)
    .subscribe(
      result=>{this.blog=result;
      
      },
      error=>alert("Server error. Please try again")
    );
    
    
  }

}
