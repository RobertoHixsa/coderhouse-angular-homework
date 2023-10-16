import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import ClassRoutingModule from './class-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { AllClassesComponent } from './components/all-classes/all-classes.component';

@NgModule({
  declarations: [CreateClassComponent, AllClassesComponent],
  imports: [NgIf, ClassRoutingModule, SharedModule],
})
export class ClassModule {}
