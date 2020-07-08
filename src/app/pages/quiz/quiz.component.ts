import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz: FormGroup;
  answer:boolean=false;
  submission=[];
  score=0;
  type:string
  list=[]

  constructor(private featureService:FeaturesService) { }
  ngOnInit(): void {
    this.list=[]
    this.quiz = new FormGroup({
      ans1: new FormControl(null, {validators: [Validators.required]}),
      ans2: new FormControl(null, {validators: [Validators.required]}),
      ans3: new FormControl(null, {validators: [Validators.required]}),
      ans4: new FormControl(null, {validators: [Validators.required]}),
      ans5: new FormControl(null, {validators: [Validators.required]}),
      ans6: new FormControl(null, {validators: [Validators.required]}),
      ans7: new FormControl(null, {validators: [Validators.required]}),
      ans8: new FormControl(null, {validators: [Validators.required]}),
      ans9: new FormControl(null, {validators: [Validators.required]}),
      ans10: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  submit(){
    if(this.quiz.invalid){
      return
    }
    if(this.list[0].answer==this.quiz.value.ans1){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[1].answer==this.quiz.value.ans2){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[2].answer==this.quiz.value.ans3){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[3].answer==this.quiz.value.ans4){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[4].answer==this.quiz.value.ans5){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[5].answer==this.quiz.value.ans6){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[6].answer==this.quiz.value.ans7){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[7].answer==this.quiz.value.ans8){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[8].answer==this.quiz.value.ans9){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    if(this.list[9].answer==this.quiz.value.ans10){
      this.submission.push(true)
    } else {
      this.submission.push(false)
    }
    this.featureService.submitQuiz(this.submission,this.type)
    .subscribe((data)=>{
      if(data.value){
        this.score = data.message
        this.answer =true
        window.scroll(0,0)
      }
    })

  }

  setCateg(categ){
    this.type=categ
    this.featureService.getQuiz(categ)
    .subscribe((data)=>{
      if(data.value){
        console.log(data.message)
        this.list=data.message
      }
    })
    // console.log(categ)
  }

  another(){
    this.list=[]
    this.type =''
    this.answer=false
    this.quiz.reset()
    this.submission=[]
  }
}
