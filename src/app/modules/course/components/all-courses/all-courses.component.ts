import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  source: any;

  shortCourses = this.courseService.coursesObservable$.pipe(
    map((courses) => courses.filter((course) => course.durationInHours < 50))
  );

  longCourses = this.courseService.coursesObservable$.pipe(
    map((courses) => courses.filter((course) => course.durationInHours >= 50))
  );

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.loadCourses();
  }
}
