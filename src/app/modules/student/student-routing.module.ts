import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

const routes: Routes = [
  { path: '', component: AllStudentsComponent },
  { path: 'add', component: CreateStudentComponent },
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export default class StudentRoutingModule {}
