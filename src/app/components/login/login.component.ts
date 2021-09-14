import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.createLoginForm();
    // auth and
    if(this.isLoggedIn)
      this.goToHomePage();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.isLoggedIn = true;
    //auth and
    if(this.isLoggedIn){
      this.goToHomePage();
    }
    if (this.loginForm) {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);

      }
    }
  }

  goToHomePage():void{
    console.log('going home')
    this.router.navigate(['home'])
  }
}
