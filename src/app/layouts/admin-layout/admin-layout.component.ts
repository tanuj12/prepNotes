import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "#994d00";

  constructor() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('white-content');


  }
  ngOnInit() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    if(sidebar != undefined){
      sidebar.setAttribute('data','#994d00');
  }
  }
}
