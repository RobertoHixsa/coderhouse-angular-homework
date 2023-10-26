import { Component, OnInit } from '@angular/core';
import Course from '../../../../models/Course.model';
import { CourseService } from '../../../../services/course.service';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  courses: Course[] = [
    {
      name: 'React',
      durationInHours: 50,
    },
    {
      name: 'Django',
      durationInHours: 40,
    },
    {
      name: 'Spring',
      durationInHours: 60,
    },
  ];
  coursesObservable!: any;
  source: any;

  constructor(private courseService: CourseService) {
    this.coursesObservable = this.courseService.getCourses();
    this.source = from(this.courses).pipe(
      filter((course) => {
        return course.durationInHours > 40;
      })
    );
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {},
    });
    this.courseService.loadCourses();
  }
}
