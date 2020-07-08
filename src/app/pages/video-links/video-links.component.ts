import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-video-links',
  templateUrl: './video-links.component.html',
  styleUrls: ['./video-links.component.scss']
})
export class VideoLinksComponent implements OnInit {
  serach: FormGroup;
  links:[]=[]
  constructor(private featureService:FeaturesService) { }

  ngOnInit(): void {
    this.serach = new FormGroup({
      keyword: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
  }

  searching(){
    if(this.serach.invalid){
      return
    }
    this.featureService.videoLinks(this.serach.value.keyword)
    .subscribe((data)=>{
      this.links=data.list
    })
  }

}
