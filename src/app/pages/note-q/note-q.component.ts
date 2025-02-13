import { Component, OnInit, Pipe} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeaturesService } from 'src/app/services/features.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-note-q',
  templateUrl: './note-q.component.html',
  styleUrls: ['./note-q.component.css']
})

export class NoteQComponent implements OnInit {
  files: File[] = [];
  private DownloadReadyListenerSub: Subscription;
  notesReady = false;
  public downloadisReady = false;
  public waitingForDownload = false;
  private a: Subscription;
  public link:any;
  public uploadingSpinner = false;
  public preview = false;
  public answerReady = true;
  private AnswerReadyListenerSub: Subscription;
  public notGlobal: boolean =true;
  public settingG: boolean =false;
  constructor(private featureService: FeaturesService) { }
  notesForm: FormGroup;
  questionForm: FormGroup;
  uploaded: boolean = false;
  qNa:{
    question: string;
    answer: string;
  } []= [];
  ngOnInit(): void {
    this.notesForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
    this.questionForm = new FormGroup({
      question: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
  }



  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  uploadDoc(){
    this.uploaded = false
    this.uploadingSpinner = true
    this.a =this.featureService.upload(this.files)
    .subscribe((data) => {
      if(data.active === true){
        this.uploadingSpinner = false
        this.uploaded = true
        this.notesReady = false
        this.a.unsubscribe()
      }
      console.log(data)
    })
    // console.log(this.files)
  }

  generateNotes(){
    this.waitingForDownload =true
    this.notGlobal = true
    if (this.notesForm.invalid) {
      return;
    }

    this.featureService.generateNotes(this.notesForm.value.name)
    .subscribe((data)=>{
      console.log(data)
    })
    this.a = interval(3000).subscribe((x) => {
      this.checkDownload();
    });
  }

  checkDownload() {
  this.featureService.getDownloadReadystatus()
    .subscribe((ready) => {
        // this.downloadisReady = ready;
        if (ready.value === true) {
          this.link = ready.message;
          this.notesReady = true
          this.waitingForDownload = false;
          this.a.unsubscribe();
          console.log(this.link);
        }
    });
  }

  downloadNotes(){
    if(this.link != null) {
      window.open(this.link);
    }
  }

  previewDoc(){
    this.preview = true
  }

  question() {
    if (this.questionForm.invalid) {
      return;
    }
    this.answerReady = false
    this.featureService.generateAnswer(this.questionForm.value.question)
    .subscribe((data)=>{
      console.log(data)
    })
    this.a = interval(3000).subscribe((x) => {
      this.AnswerStatus();
    });
  }

  AnswerStatus() {
    this.featureService.getAnswerReadystatus(this.questionForm.value.question)
    .subscribe((ready) => {
      console.log(ready)
      // this.downloadisReady = ready;
      if (ready.value === true) {
        const list: {question:string;answer:string} = {question: ready.question, answer: ready.answer};
        let flag = 0;
        let i = 0;
        for (i = 0 ; i < this.qNa.length; i++) {
          if ( this.qNa[i] === list) {
            flag = 1;
            break;
          }
        }
        if ( flag === 0) {
          this.qNa.unshift(list);
        }
        this.answerReady = true
        console.log(this.qNa);
        this.a.unsubscribe();
        this.questionForm.reset();
      }
    });
  };

  setGlobal() {
    this.settingG =true
    this.featureService.setGlobal(this.link)
    .subscribe((value)=>{
      if(value.value=== true){
        this.settingG = false
        this.notGlobal = false
      } else {
        this.settingG = false
      }
    })
  }

  setNotGlobal(){
    this.settingG = true
    this.featureService.unsetGlobal(this.link)
    .subscribe((value)=>{
      if(value.value === true) {
        this.settingG = false
        this.notGlobal = true
      } else {
        this.settingG = false
      }
    })
  }
}
