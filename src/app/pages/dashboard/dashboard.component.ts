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

  }

  download(url:string) {
    console.log(url)
  }

  ngAfterViewInit() {

    let controls=document.querySelector('.controls-top');

    this.renderer.setStyle(controls.children[0], 'position', 'absolute');

    this.renderer.setStyle(controls.children[0], 'top', '50%');

    this.renderer.setStyle(controls.children[0], 'right', '99%');

    this.renderer.setStyle(controls.children[1], 'position', 'absolute');

    this.renderer.setStyle(controls.children[1], 'top', '50%');

    this.renderer.setStyle(controls.children[1], 'left', '99%');
    }
}
