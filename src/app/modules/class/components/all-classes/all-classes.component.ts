import { Component } from '@angular/core';
import { Class } from 'src/app/models';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.scss'],
})
export class AllClassesComponent {
  dataSource: Class[] = [];
  displayedColumns: string[] = ['name', 'startDate', 'endDate'];

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    console.log(this.classService.classes);
    this.dataSource = this.classService.classes;
  }
}
