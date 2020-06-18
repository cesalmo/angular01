import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCompComponent } from './lesson-comp.component';

describe('LessonCompComponent', () => {
  let component: LessonCompComponent;
  let fixture: ComponentFixture<LessonCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
