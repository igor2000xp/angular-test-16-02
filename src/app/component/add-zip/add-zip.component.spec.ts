import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZipComponent } from './add-zip.component';

describe('AddZipComponent', () => {
  let component: AddZipComponent;
  let fixture: ComponentFixture<AddZipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddZipComponent]
    });
    fixture = TestBed.createComponent(AddZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
