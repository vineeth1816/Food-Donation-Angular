import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../Blog';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit  {

  constructor(public blogUtility:BlogServiceService) { 
    
  }

  blogs:any;
  blog=new Blog();
  flag:boolean=true;
  message:string="Blogs";
  ngOnInit(): void {
    this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    console.log(this.blogs[0]);},error=>console.log("Server error"));
  }

  insert(myForm:NgForm){
    this.blogUtility.insertBlog(this.blog)
    .subscribe(result=>{
      alert("Blog Posted Successfully");
      myForm.resetForm();
      this.flag=false;
    },error=>alert("Server Error.Blog Posting Failed"));
    
  }
  
    
}

