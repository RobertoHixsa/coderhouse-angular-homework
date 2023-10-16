import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models';
import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss'],
})
export class AllStudentsComponent implements OnInit {
  dataSource: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'currentGrade', 'estatus'];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.dataSource = this.studentService.students;
  }
}
