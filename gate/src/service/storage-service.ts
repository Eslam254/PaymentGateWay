import { JsonPipe } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InjectorInstance } from '../app.module';
import { UserResponse } from '../modules/user/models/user-response';
@Injectable({ providedIn: 'root' })
export class StorageService {

  static get _storage() {
    return localStorage.getItem('rememberCurrentUser') === 'true'
      ? localStorage
      : sessionStorage;
  }
  static setRememberCurrentUser(flag: boolean) {
    localStorage.setItem('rememberCurrentUser', flag.toString());
  }
  static getRememberCurrentUser(): boolean {
    return localStorage.getItem('rememberCurrentUser') == 'true' ? true : false;
  }
  static getCurrentUserInfo() {
    let user = this._storage.getItem('currentUser') ?? '';
    return JSON.parse(user) ?? new UserResponse();
  }
  static setCurrentUserInfo(user: UserResponse) {
    const jsonData = JSON.stringify(user);
    this._storage.setItem('currentUser', jsonData);
    this.setLanguage(user.Language === 'English' ? 'en' : 'ar');
  }
  static clearCurrentUserInfo() {
    this._storage.removeItem('currentUser');
  }
  static setToken(token: string) {
    this._storage.setItem('TOKEN', token);
  }
  static getToken(): string {
    return this._storage.getItem('TOKEN') ?? '';
  }
  static clearToken() {
    this._storage.removeItem('TOKEN');
  }
  static setLanguage(lang: string) {
    this._storage.setItem('lang', lang);
    this.changeAppLanguage();
  }
  static getLanguage(): string {
    return this._storage.getItem('lang') ?? '';
  }
  static clearLanguage() {
    this._storage.removeItem('lang');
  }
  static getShowMenu(): boolean {
    return localStorage.getItem('showMenu') === 'true' ? true : false;
  }
  static getStartShowMenu(): boolean {
    return localStorage.getItem('showMenu_start') === 'true' ? true : false;
  }
  static clearAllLocalStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }
  static changeAppLanguage(): void {
    let lang = StorageService.getLanguage();
    let document = InjectorInstance.get<Document>(DOCUMENT);
    let translate = InjectorInstance.get<TranslateService>(TranslateService);
    const htmlTag = document?.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    if (htmlTag) {
      htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
      htmlTag.lang = lang;
      document.body.className = lang === 'ar' ? 'body__Ar' : 'body__En';
      translate?.use(lang);
    }
  }
  static setCurrentUserBranchId(id: string): void {
    this._storage.setItem('branchId', id);
  }
  static getCurrentUserBranchId(): number {
    return parseInt(this._storage.getItem('branchId') ?? '0');
  }
  static setCompanyLogo(img: any) {
    this._storage.setItem('logo', img);
  }
  static getCompanyLogo() {
    return this._storage.getItem('logo');
  }
}
