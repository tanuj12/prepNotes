import { Component, OnInit, Renderer2 } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = [{}];
  slides: any = [[]];
  qNa:[]= [];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));

    }

    return R;
  }
  constructor(private renderer: Renderer2,private featureService:FeaturesService ) { }

  ngOnInit(): void {
    this.featureService.getNotesLinks()
    .subscribe((data)=>{
      this.cards = data.links
      console.log(this.cards)
      this.slides = this.chunk(this.cards, 3);
    })

    this.featureService.getAllQuestions()
    .subscribe((data)=>{
      this.qNa=data.qna
    })
  }

  download(url:string) {
    if(url != null) {
      window.open(url);
    }
  }
}
