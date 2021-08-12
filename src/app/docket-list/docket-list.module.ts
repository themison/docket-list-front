import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocketListPageRoutingModule } from './docket-list-routing.module';

import { DocketListPage } from './docket-list.page';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, DocketListPageRoutingModule, SharedModule],
  declarations: [DocketListPage, ProjectItemComponent, ProjectsComponent, AddProjectComponent, ProjectTasksComponent],
})
export class DocketListPageModule {}
