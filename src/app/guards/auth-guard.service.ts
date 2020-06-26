import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, NavigationEnd, RoutesRecognized } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap, filter, pairwise } from 'rxjs/operators'
import { NgbdModalContent } from '../pages/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable()
export class AuthGuard implements CanActivate {
a: Subscription
prevUrl:string
  constructor(private _authService: AuthService, private _router: Router,private modalService: NgbModal) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(AuthService.User){
      return true
    }
    else if (AuthService.User === false) {
      console.log('y here')
      NgbdModalContent.url = state.url
      // console.log('goin to '+NgbdModalContent.url)
      this.modalService.open(NgbdModalContent);
      this._router.navigate(['/homePage']);
      return false
    }
    else{
      console.log('it should be here')
    this._authService.checkUser()
    return this._authService.getUser().pipe(tap((isLoggedIn:boolean) => {
      console.log(isLoggedIn)
      if (!isLoggedIn) {

        NgbdModalContent.url = state.url
        console.log('goin to '+NgbdModalContent.url)
        this.modalService.open(NgbdModalContent);
        this._router.navigate(['/homePage']);
      }
    }));
  }
  }

}
