import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/models';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  form!: FormGroup;
  students!: Student[];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, isValidEmail()]),
      currentGrade: new FormControl(null, [
        Validators.required,
        isValidGrade(),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) return;
    const name = this.form.value['name'];
    const email = this.form.value['email'];
    const currentGrade = this.form.value['currentGrade'];
    this.students.push({ name, email, currentGrade });
    this.form.reset();
  }
}

function isValidGrade(): ValidatorFn {
  return (control: AbstractControl<number>): ValidationErrors | null => {
    if (control.value) {
      if (control.value < 0 || control.value > 100) {
        return { validGrade: true };
      }
    }
    return null;
  };
}

function isValidEmail(): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    if (control.value?.length > 0) {
      if (!control.value.includes('@')) {
        return { validEmail: true };
      }
    }
    return null;
  };
}
