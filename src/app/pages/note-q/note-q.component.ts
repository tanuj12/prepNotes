import { Component, OnInit, Pipe} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeaturesService } from 'src/app/services/features.service';
import { interval, Subscription } from 'rxjs';
import { PRIMARY_OUTLET } from '@angular/router';
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
  public primary="primary";
  public uploadingSpinner = false;
  public preview = false;
  constructor(private featureService: FeaturesService) { }
  notesForm: FormGroup;
  uploaded: boolean = false;

  ngOnInit(): void {
    this.notesForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
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
    this.featureService.upload(this.files)
    .subscribe((data) => {
      if(data.active === true){
        this.uploadingSpinner = false
        this.uploaded = true
        this.notesReady = false
      }
      console.log(data)
    })
    // console.log(this.files)
  }

  generateNotes(){
    this.waitingForDownload =true
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
}
