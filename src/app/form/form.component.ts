import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string = "Login Page";
  loginForm: FormGroup | any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: [" "],
      password: [" "],
    }  )
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }

}
