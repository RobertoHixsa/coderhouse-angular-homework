import Course from './Course.model';
import Student from './Student.model';

interface Class {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  course?: Course;
  students: Student[];
}

export default Class;
