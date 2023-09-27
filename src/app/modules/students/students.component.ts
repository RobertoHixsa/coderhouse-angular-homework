import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students = [
    {
      name: 'Juan',
      lastName: 'Gonzalo',
      grade: 93,
    },
    {
      name: 'María',
      lastName: 'López',
      grade: 85,
    },
    {
      name: 'Carlos',
      lastName: 'Martínez',
      grade: 78,
    },
    {
      name: 'Ana',
      lastName: 'Rodríguez',
      grade: 90,
    },
    {
      name: 'Pedro',
      lastName: 'Sánchez',
      grade: 74,
    },
    {
      name: 'Laura',
      lastName: 'Fernández',
      grade: 92,
    },
    {
      name: 'Miguel',
      lastName: 'Díaz',
      grade: 79,
    },
    {
      name: 'Isabel',
      lastName: 'Ramírez',
      grade: 87,
    },
    {
      name: 'Alejandro',
      lastName: 'García',
      grade: 95,
    },
    {
      name: 'Sofía',
      lastName: 'Pérez',
      grade: 71,
    },
    {
      name: 'Diego',
      lastName: 'Hernández',
      grade: 84,
    },
    {
      name: 'Elena',
      lastName: 'Gómez',
      grade: 89,
    },
    {
      name: 'Pablo',
      lastName: 'Torres',
      grade: 86,
    },
    {
      name: 'Carmen',
      lastName: 'Morales',
      grade: 94,
    },
    {
      name: 'Javier',
      lastName: 'Luna',
      grade: 82,
    },
    {
      name: 'Raquel',
      lastName: 'Soto',
      grade: 97,
    },
    {
      name: 'Andrés',
      lastName: 'Ortega',
      grade: 75,
    },
    {
      name: 'Natalia',
      lastName: 'Vargas',
      grade: 88,
    },
    {
      name: 'Daniel',
      lastName: 'Cabrera',
      grade: 90,
    },
    {
      name: 'Patricia',
      lastName: 'Rojas',
      grade: 96,
    },
    {
      name: 'Luis',
      lastName: 'Pérez',
      grade: 60,
    },
  ];
}
