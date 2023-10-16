import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';

const routes: Routes = [
  { path: '', component: AllCoursesComponent },
  { path: 'add', component: CreateCourseComponent },
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export default class CourseRoutingModule {}
