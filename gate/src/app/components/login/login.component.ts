import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from './login-request';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
request:LoginRequest=new LoginRequest();
  constructor(
    private router : Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){

    this.authService.login(this.request).subscribe(
      () => { this.router.navigate(['gateway']); },
    );

  }

}
