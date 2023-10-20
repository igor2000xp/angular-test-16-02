import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConditionalsComponent } from './current-conditionals.component';

describe('CurrentConditionalsComponent', () => {
  let component: CurrentConditionalsComponent;
  let fixture: ComponentFixture<CurrentConditionalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentConditionalsComponent]
    });
    fixture = TestBed.createComponent(CurrentConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
