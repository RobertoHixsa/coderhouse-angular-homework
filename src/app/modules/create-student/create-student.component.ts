import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  form!: FormGroup;
  students: { name: string; email: string }[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, isValidEmail()]),
    });
  }

  submit() {
    if (this.form.invalid) return;
    const name = this.form.value['name'];
    const email = this.form.value['email'];
    this.students.push({ name, email });
  }
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
