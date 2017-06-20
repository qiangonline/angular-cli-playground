import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAndViewChildComponent } from './content-and-view-child.component';

describe('ContentAndViewChildComponent', () => {
  let component: ContentAndViewChildComponent;
  let fixture: ComponentFixture<ContentAndViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAndViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAndViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
