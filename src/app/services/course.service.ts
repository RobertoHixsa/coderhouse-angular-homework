import { Injectable } from '@angular/core';
import { Course } from '../models';
import { BehaviorSubject, Observable, filter, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);
  private coursesObservable$ = this.courses$.asObservable();

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

  private source = from(this.courses).pipe(
    filter((course) => {
      return course.durationInHours > 40;
    })
  );

  addCourse(course: Course) {
    this.courses.push(course);
  }

  loadCourses() {
    this.courses$.next(this.courses);
  }

  getCourses(): Observable<Course> {
    return this.source;
  }
}
