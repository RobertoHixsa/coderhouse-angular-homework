import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Class from 'src/app/models/Class.model';
import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss'],
})
export class CreateClassComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    if (!this.form.valid) return;
    const name = this.form.value['name'];
    const startDate = this.form.value['startDate'];
    const endDate = this.form.value['endDate'];
    const newClass: Class = {
      id: this.classService.classes.length,
      name,
      startDate,
      endDate,
      students: [],
    };
    this.classService.classes.push(newClass);
    this.form.reset();
  }
}
