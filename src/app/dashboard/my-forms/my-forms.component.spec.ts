import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormsComponent } from './my-forms.component';

describe('MyFormsComponent', () => {
  let component: MyFormsComponent;
  let fixture: ComponentFixture<MyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
