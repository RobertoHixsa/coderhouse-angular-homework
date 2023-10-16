import { Injectable } from '@angular/core';
import Class from '../models/Class.model';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  classes: Class[] = [
    {
      id: 1,
      name: 'A1',
      startDate: new Date('05/Aug/2023'),
      endDate: new Date('05/Dec/2023'),
      students: [],
    },
    {
      id: 2,
      name: 'B1',
      startDate: new Date('12/Aug/2023'),
      endDate: new Date('12/Dec/2023'),
      students: [],
    },
  ];
}
