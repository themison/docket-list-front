import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProjectComponent } from './components/modals/create-project/create-project.component';
import { IonicModule } from '@ionic/angular';
import { CreateTaskComponent } from './components/modals/create-task/create-task.component';

@NgModule({
  declarations: [CreateProjectComponent, CreateTaskComponent],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
