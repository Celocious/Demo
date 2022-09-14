import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string = "Login Page";
  loginFM:FormGroup | any;
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginFM = new FormGroup ({
      user: new FormControl(" "),
      password: new FormControl(" "),
    }  )
  }
  

}
