import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student.component';

const routes: Routes = [{ path: '', component: CreateStudentComponent }];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CreateStudentRoutingModule {}
