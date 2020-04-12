import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQComponent } from './note-q.component';

describe('NoteQComponent', () => {
  let component: NoteQComponent;
  let fixture: ComponentFixture<NoteQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
