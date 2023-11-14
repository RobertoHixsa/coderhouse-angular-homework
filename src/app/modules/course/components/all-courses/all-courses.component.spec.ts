import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesComponent } from './all-courses.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('AllCoursesComponent', () => {
  let component: AllCoursesComponent;
  let fixture: ComponentFixture<AllCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCoursesComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(AllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
