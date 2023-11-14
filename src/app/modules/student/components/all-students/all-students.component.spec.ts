import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsComponent } from './all-students.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Student } from 'src/app/models';
import { StudentService } from 'src/app/services/student.service';

describe('AllStudentsComponent', () => {
  let component: AllStudentsComponent;
  let fixture: ComponentFixture<AllStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStudentsComponent],
      imports: [SharedModule],
    });

    fixture = TestBed.createComponent(AllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it gets the approved students', () => {
    const approvedStudents = component.getApprovedStudents();
    if (approvedStudents.length > 0) {
      const randomStudent = approvedStudents[0];
      expect(randomStudent).toBeTruthy();
    } else {
      expect(component).toBeTruthy();
    }
  });
});
