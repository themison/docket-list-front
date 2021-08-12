import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocketListPage } from './docket-list.page';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: DocketListPage,
    children: [
      {
        path: '**',
        component: ProjectTasksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocketListPageRoutingModule {}
