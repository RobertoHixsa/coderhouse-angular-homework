import { Injectable } from '@angular/core';
import { Course } from '../models';
import { BehaviorSubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);

  coursesObservable$ = this.courses$.asObservable().pipe(shareReplay());

  loadCourses() {
    this.courses$.next(courses);
  }
}

const courses = [
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
