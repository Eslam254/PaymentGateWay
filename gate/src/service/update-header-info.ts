import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateHeaderInfoService {
  /************************************* */
  private changeLogo = new BehaviorSubject<any>(null);
  currentLogo = this.changeLogo.asObservable();
  private changeUserInfo = new BehaviorSubject<any>(null);
  currentUserInfo = this.changeUserInfo.asObservable();
  private changeCurrentUserBranches = new BehaviorSubject<any>(null);
  currentUserBranches = this.changeCurrentUserBranches.asObservable();
  /***********************************************/

  changeCompanyLogo(logo: any) {
    this.changeLogo.next(logo)
  }
  changeCurrentUserInfo(user: any) {
    this.changeUserInfo.next(user);
  }
  changeCurrentUserBranch(branch: any) {
    this.changeCurrentUserBranches.next(branch);
  }


}
