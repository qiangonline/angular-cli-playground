import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAndViewComponent } from './content-and-view.component';

describe('ContentAndViewComponent', () => {
  let component: ContentAndViewComponent;
  let fixture: ComponentFixture<ContentAndViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAndViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAndViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
