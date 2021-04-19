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
  flag:boolean=true;
  message:string="Blogs";
  ngOnInit(): void {
    this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    console.log(this.blogs[0]);},error=>console.log("Server error"));
  }
<<<<<<< HEAD

  insert(myForm:NgForm){
    this.blogUtility.insertBlog(this.blog)
    .subscribe(result=>{
      alert("Blog Posted Successfully");
      myForm.resetForm();
      this.flag=false;
    },error=>alert("Server Error.Blog Posting Failed"));
    
  }
=======
  viewBlog(id:number){
    console.log(id);
    
  }
  updateBlog(id:number){
    console.log(id); 
    let blog=new Blog();
  
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
>>>>>>> 5b89cfd0b81d93a8f298e2587978aa0acded588b
  
    
}

