import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentComponent } from './create-student.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('CreateStudentComponent', () => {
  let component: CreateStudentComponent;
  let fixture: ComponentFixture<CreateStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStudentComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(CreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
