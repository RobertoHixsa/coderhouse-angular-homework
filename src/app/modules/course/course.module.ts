import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import CourseRoutingModule from './course-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreateCourseComponent, AllCoursesComponent],
  imports: [
    CommonModule,
    NgIf,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CourseRoutingModule,
    MatDividerModule,
    SharedModule,
  ],
})
export class CourseModule {}
