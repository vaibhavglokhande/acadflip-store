import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAdvancedComponent } from './reactive-form-advanced.component';

describe('ReactiveFormAdvancedComponent', () => {
  let component: ReactiveFormAdvancedComponent;
  let fixture: ComponentFixture<ReactiveFormAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
