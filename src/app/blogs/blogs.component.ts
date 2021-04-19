import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  message:string="Blogs";
  ngOnInit(): void {
    this.blogUtility.getBlogs()
    .subscribe(result=>{
      this.blogs=result;
    console.log(this.blogs[0]);},error=>console.log("Server error"));
  }
  
    
}

