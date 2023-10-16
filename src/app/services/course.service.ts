import { Injectable } from '@angular/core';
import { Course } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[] = [
    {
      name: 'React',
      durationInHours: 50,
    },
    {
      name: 'Django',
      durationInHours: 40,
    },
  ];

  addCourse(course: Course) {
    this.courses.push(course);
  }
}
