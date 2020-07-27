import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { ButtonsModule,CardsModule,CarouselModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NoteQComponent } from 'src/app/pages/note-q/note-q.component';
import { LoginComponent, NgbdModalContent } from '../../pages/login/login.component';
import { RegisterComponent, NgbdModalContent1 } from 'src/app/pages/register/register.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { SafePipe } from 'src/app/pipes/safePipe';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuizComponent } from 'src/app/pages/quiz/quiz.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { VideoLinksComponent } from 'src/app/pages/video-links/video-links.component';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    MatExpansionModule,
    HttpClientModule,
    NgbModule,
    NgxDocViewerModule,
    MatProgressSpinnerModule,
    CarouselModule,
    WavesModule,
    CardsModule,
    ButtonsModule,
    NgxPaginationModule,
    MatSelectModule,
    NgxDropzoneModule,
    MDBBootstrapModule.forRoot(),
    MatOptionModule
  ],
  declarations: [
    HomePageComponent,
    DashboardComponent,
    NoteQComponent,
    LoginComponent,
    NgbdModalContent,
    NgbdModalContent1,
    RegisterComponent,
    SafePipe,
    QuizComponent,
    VideoLinksComponent,
    FilterPipe
    // RtlComponent
  ],
  providers: [AuthGuard]
})
export class AdminLayoutModule {}
