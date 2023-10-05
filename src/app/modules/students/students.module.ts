import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentsRoutingModule } from './students-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    NgIf,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    StudentsRoutingModule,
    MatDividerModule,
  ],
})
export class StudentsModule {}
