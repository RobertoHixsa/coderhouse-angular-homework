import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassesComponent } from './all-classes.component';

describe('AllClassesComponent', () => {
  let component: AllClassesComponent;
  let fixture: ComponentFixture<AllClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllClassesComponent]
    });
    fixture = TestBed.createComponent(AllClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
