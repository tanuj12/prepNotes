import { Component } from "@angular/core";
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";
  constructor(private _authService:AuthService ){
    // this._authService.checkUser()
    // console.log('2')
  }

}
