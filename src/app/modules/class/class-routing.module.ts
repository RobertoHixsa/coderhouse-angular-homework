import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClassesComponent } from './components/all-classes/all-classes.component';
import { CreateClassComponent } from './components/create-class/create-class.component';

const routes: Routes = [
  { path: '', component: AllClassesComponent },
  { path: 'add', component: CreateClassComponent },
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export default class ClassRoutingModule {}
