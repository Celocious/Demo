import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string = "Login Page";
  loginForm: FormGroup | any;
  data:any;
  show:boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      user: ["", [Validators.required, Validators.pattern('[A-Za-z]+$')]],
      password: ["",[Validators.required, Validators.minLength(5)]],
      email: ["",[Validators.email, Validators.required]]
    }  )
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }
  
  get user(){
    return this.loginForm.get(`user`)
  }

  get email(){
    return this.loginForm.get(`email`)
  }
  
  get password(){
    return this.loginForm.get(`password`)
  }

  chang(){
    this.show = !this.show;
  }

}
