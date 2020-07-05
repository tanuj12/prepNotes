import { Component, OnInit, Renderer2 } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides: any = [[]];
  gNotes: any = [[]];
  qNa:[]= [];
  public settingG: boolean =false;

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
      this.slides = this.chunk(data.links, 3);
    })

    this.featureService.getAllQuestions()
    .subscribe((data)=>{
      this.qNa=data.qna
    })

    this.featureService.getGlobalNotesLinks()
    .subscribe((data)=>{
      console.log(data)
      this.gNotes = this.chunk(data.links, 3);
    })
  }

  download(url:string) {
    if(url != null) {
      window.open(url);
    }
  }

  setGlobal(link) {
    this.settingG =true
    this.featureService.setGlobal(link)
    .subscribe((value)=>{
      if(value.value=== true){

        this.featureService.getNotesLinks()
        .subscribe((data)=>{
          this.slides = this.chunk(data.links, 3);


          this.featureService.getGlobalNotesLinks()
          .subscribe((data)=>{
            console.log(data)
            this.gNotes = this.chunk(data.links, 3);
            this.settingG = false
          })

        })
      } else {
        this.settingG = false
      }
    })
  }

  setNotGlobal(link){
    this.settingG = true
    this.featureService.unsetGlobal(link)
    .subscribe((value)=>{
      if(value.value === true) {

        this.featureService.getNotesLinks()
        .subscribe((data)=>{
          this.slides = this.chunk(data.links, 3);
          this.featureService.getGlobalNotesLinks()
          .subscribe((data)=>{
            console.log(data)
            this.gNotes = this.chunk(data.links, 3);
            this.settingG = false
          })
        })
      } else {
        this.settingG = false
      }
    })
  }
}
