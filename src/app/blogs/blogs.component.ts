import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit  {

  constructor(public blogUtility:BlogServiceService,private router:Router) { 
    
  }

  blogs:any;
  blog=new Blog();
  // blog=new Blog();
  
  updateDivFlag:boolean=false;
  HomeFlag:boolean=true;
  updateFlag:boolean=false;
  viewFlag=false;
  message:string="Blogs";
  ngOnInit(): void {
     if(localStorage.getItem('userId')==null){
      this.router.navigate(['/']);
    }
    this.HomeFlag=true;
    this.updateDivFlag=false;
    this.updateFlag=false;
    this.viewFlag=false;
    this.message="Blogs";
    this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    // console.log(this.blogs[0]);
  },error=>console.log("Server error"));
  }

  insert(myForm:NgForm){
    
    this.blogUtility.insertBlog(this.blog)
    .subscribe(result=>{
      alert("Blog Posted Successfully");
      myForm.resetForm();
      this.ngOnInit();
    },error=>alert("Server Error.Blog Posting Failed"));
    
  }
  viewBlog(id:number){
    this.viewFlag=true;
    this.HomeFlag=false;
    this.blog.blog_ID=id;
    this.blogUtility.getBlog(this.blog)
    .subscribe(
      result=>this.blog=result,
      error=>alert("Server error. Please try again")
    );
    
    
  }
  updateBlog(id:number){
    this.message="Update blog";
    this.updateFlag=true;
    this.HomeFlag=false;
    this.blog.blog_ID=id;
    
    this.blogUtility.getBlog(this.blog)
    .subscribe(
      result=>this.blog=result,
      error=>alert("Server error. Please try again")
    );
  
  }
  updateBlog1(myForm:NgForm){
    this.blogUtility.updateBlog(this.blog)
    .subscribe(result=>{
      alert("Updated Successfully");
      this.ngOnInit();
    },error=>alert("Server error. Please try again"));
  }
  deleteBlog(id:number){
    console.log(id);
    let blog=new Blog();
    blog.blog_ID=id;
    this.blogUtility.deleteBlog(blog)
    .subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    },error=>console.log("unable to delete"))
  }

  viewPostForm(){
    this.message="Add a new post";
    this.blog.blog_ID=null;
    this.blog.blog_Title=null;
    this.blog.description=null;
    this.HomeFlag=false;
    this.updateDivFlag=true;
    
  }
  
    
}

