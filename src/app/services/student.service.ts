import { Injectable } from '@angular/core';
import { Student } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    {
      name: 'Bob Marley',
      email: 'bob@email.com',
      currentGrade: 71,
    },
    {
      name: 'Whitney Houston',
      email: 'whitney@email.com',
      currentGrade: 82,
    },
    {
      name: 'Mariya Takeuchi',
      email: 'mariya@email.com',
      currentGrade: 91,
    },
  ];
}
