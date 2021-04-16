import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  validate(myForm:NgForm){
    console.log(myForm);
    if(myForm.form.invalid)
    alert("Please update the highlighted madatory field(s).");
    else
    alert("New user created Successfully");
  }

}
