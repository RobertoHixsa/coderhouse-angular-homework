import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourseComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
