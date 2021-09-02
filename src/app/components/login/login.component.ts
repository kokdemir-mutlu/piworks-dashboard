import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = true;
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm) {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
      }
    }
  }

  goToHomePage():void{
    this.router.navigate(['home'])
  }
}
