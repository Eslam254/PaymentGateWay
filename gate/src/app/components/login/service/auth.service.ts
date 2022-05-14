import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOGIN_FROM } from 'src/app/core/models/model';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginRequest } from '../login-request';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /************[Fields]******************** */
  isLoggedIn: boolean = false;
  httpOptions: any = null;
  rememberMe: boolean = false;
  /*************************************** */
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    public readonly jwtHelper: JwtHelperService,
    private sanitizer: DomSanitizer,
  ) { }

   get _storage() {
    return localStorage;
  }

  login(loginForm: LoginRequest): Observable<LoginRequest> {
    debugger
    this.clearAllLocalStorage();
    return this.http.post<LoginRequest>('Account/authenticate', loginForm).pipe(
      tap((response: any) => {
        if (response.Data != null) {
          this.setUserLocalStorage(response.data.jwToken);
          return true;
        } else {
          return false;
        }
      })
    );
  }
  logout() {
    //clear all local storages and redirect to main public page
    this.clearAllLocalStorage();
    this.rememberMe = false;
  }

  isAuth(): boolean {
    if (this.isTokenExpired()) {
      return false;
    }
    const token = this.getToken(); //token
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
  setUserLocalStorage(token: string): void {
      this.clearAllLocalStorage();
      this.setToken(token);
      let decoded = jwt_decode(token) as any;

  }
  getTokenExpirationDate(token: string): Date {
    let decoded = jwt_decode(token) as any;
    if (decoded['exp'] === undefined) return null as any;
    // let exp = parseInt(decoded['exp'] as string);
    var date = new Date();

    //date = new Date(date.setDate(date.getDate() + 1));
    //date =new Date(2019);
    var date = new Date();
    let x = (this.jwtHelper.getTokenExpirationDate(token) != null) ? this.jwtHelper.getTokenExpirationDate(token) : new Date();
    date = new Date(x!.toUTCString());
    return date;
  }
  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;
    let date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    let check = date < new Date();
    return check;
  }

  getToken(): string {
    return this._storage.getItem('TOKEN') ?? '';
  }
  setToken(token: string) {
    this._storage.setItem('TOKEN', token);
  }
 clearAllLocalStorage() {
    localStorage.clear();
  }
}
