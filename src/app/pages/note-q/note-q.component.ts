import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-q',
  templateUrl: './note-q.component.html',
  styleUrls: ['./note-q.component.css']
})
export class NoteQComponent implements OnInit {
  files: File[] = [];
  constructor() { }

  ngOnInit(): void {
  }



  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
