import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }


createLoginForm(){
  this.loginForm = this.formBuilder.group({
    userName:["",Validators.required],
    password:["",Validators.required]

  })
  }
}
