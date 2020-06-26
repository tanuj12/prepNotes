import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static User: boolean
  static userStatus = new Subject<boolean>() ;
  constructor(private http: HttpClient, private router: Router) { }

  createUser(email: string, password: string, uName: string) {
    const authData = { email, password, uName};
    return this.http
    .post<{message: string, result: boolean }>('http://localhost:5000/auth/signup', authData );
  }

  loginUser(email: string, password: string) {
    const authData = { email, password};
    return this.http
    .post<{message: string, acitve: boolean}>('http://localhost:5000/auth/login', authData );
  }

  getUser() {
    return AuthService.userStatus.asObservable()
  }

  checkUser() {
    this.http.get<{value: boolean, message: string}>('http://localhost:5000/auth/checkUser')
    .subscribe((response) => {
      if (response.value !== true) {
        AuthService.User = false
        AuthService.userStatus.next(false);
      } else {
        AuthService.User = true
        AuthService.userStatus.next(true);
      }
    });
  }
  logout() {
    this.http.get<{value: boolean, message: string}>('http://localhost:5000/auth/logout')
    .subscribe((response) => {
        AuthService.User = false
        AuthService.userStatus.next(false);
        this.router.navigate(['/homePage']);
    });
  }


}
