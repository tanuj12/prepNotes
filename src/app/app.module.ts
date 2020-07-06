import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import {MatExpansionModule} from '@angular/material/expansion';
import { NoteQComponent } from './pages/note-q/note-q.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './pages/register/register.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuizComponent } from './pages/quiz/quiz.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, QuizComponent, AboutusComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
