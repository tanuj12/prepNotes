import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private DownloadReady = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  upload(files:File[]) {
    // console.log(file)
    let body = new FormData();
    for (const file of files) {
      body.append('f', file, file.name);
    }
    return this.http.post<{message: string,active: boolean, }>('http://localhost:5000/upload/upload',body)
  }

  generateNotes(name: string){
    let body={name}
    return this.http.post<{message: string,active: boolean, }>('http://localhost:5000/features/generateNotes',body)
  }

   getDownloadReadystatus() {
      return this.http.get<{value: boolean, message: string}>('http://localhost:5000/features/DownloadStatus')
   }

   generateAnswer(question:string) {
    let body={question}
      return this.http.post<{value:boolean, message: string}>('http://localhost:5000/features/generateAnswer',body)
   }

   getAnswerReadystatus(question:string) {
    let body={question}
    return this.http.post<{value: boolean, question: string, answer:string}>('http://localhost:5000/features/answerStatus',body)
   }

   getNotesLinks(){
     return this.http.get<any>('http://localhost:5000/features/allNotesLink')
   }

   getAllQuestions(){
    return this.http.get<any>('http://localhost:5000/features/allQuestions')
   }

   setGlobal(link:string){
    let body={link}
    return this.http.post<{value: boolean, message:string}>('http://localhost:5000/features/setGlobal',body)
   }

   unsetGlobal(link:string) {
    let body={link}
    return this.http.post<{value: boolean, message:string}>('http://localhost:5000/features/unsetGlobal',body)
   }

   getGlobalNotesLinks(){
    return this.http.get<any>('http://localhost:5000/features/allGlobalNotesLink')
   }

   videoLinks(keyWord:string){
     console.log('here')
    let body={keyWord}
    return this.http.post<any>('http://localhost:5000/features/videoSearch',body)
   }
}
