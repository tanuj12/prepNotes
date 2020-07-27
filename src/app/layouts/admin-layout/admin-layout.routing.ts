import { Routes } from "@angular/router";


import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NoteQComponent } from 'src/app/pages/note-q/note-q.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { QuizComponent } from 'src/app/pages/quiz/quiz.component';
import { VideoLinksComponent } from 'src/app/pages/video-links/video-links.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
export const AdminLayoutRoutes: Routes = [
  { path: "quiz", component: QuizComponent, canActivate: [AuthGuard] },
  { path: "videoLinks", component: VideoLinksComponent, canActivate: [AuthGuard] },
  { path: "homePage", component: HomePageComponent },
  { path: "notes", component: NoteQComponent , canActivate: [AuthGuard]},
  { path: "QnA", component: NoteQComponent, canActivate: [AuthGuard], },
  { path: "dashboard", component: DashboardComponent ,canActivate: [AuthGuard],},
];
