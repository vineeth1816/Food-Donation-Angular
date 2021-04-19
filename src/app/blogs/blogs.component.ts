import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  message:string="Blogs";
  ngOnInit(): void {
    this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    console.log(this.blogs[0]);},error=>console.log("Server error"));
  }
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
  
    
}

