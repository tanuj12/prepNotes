import { Routes } from "@angular/router";

import { DashboardComponentOld } from "../../pages/dashboard(old)/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboardOld", component: DashboardComponentOld },
  { path: "dashboard", component: DashboardComponent },
  { path: "homePage", component: HomePageComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
];
