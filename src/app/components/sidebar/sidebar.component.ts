import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/homePage",
    title: "Home Page",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/notes",
    title: "Notes",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/QnA",
    title: "QnA",
    icon: "icon-paper",
    class: ""
  },
  {
    path: "/videoLinks",
    title: "Video Links",
    icon: "icon-triangle-right-17",
    class: ""
  },
  {
    path: "/quiz",
    title: "Quiz",
    icon: "icon-bulb-63",
    class: ""
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
