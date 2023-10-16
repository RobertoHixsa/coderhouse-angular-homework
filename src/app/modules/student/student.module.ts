import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import StudentRoutingModule from './student-routing.module';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

@NgModule({
  declarations: [AllStudentsComponent, CreateStudentComponent],
  imports: [SharedModule, StudentRoutingModule],
})
export class StudentModule {}
