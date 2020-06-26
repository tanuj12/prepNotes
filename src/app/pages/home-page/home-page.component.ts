import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 status:boolean
 status2:boolean
 userStatus: Subscription
  constructor(private authService:AuthService) { }
  ngOnInit() {
    this.status2 = AuthService.User
    console.log(this.status)
    this.userStatus = this.authService.getUser()
    .subscribe((status)=>{

      this.status = status
    })
    // this.authService.checkUser()

  }
  ngOnDestroy(){
    this.userStatus.unsubscribe()
  }
}
