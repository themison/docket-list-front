import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { first, mergeMap } from 'rxjs/operators';
import { CreateTaskComponent } from 'src/app/shared/components/modals/create-task/create-task.component';
import { TaskModel } from 'src/app/shared/models/task.model';
import { TasksNetworkService } from 'src/app/shared/network-services/tasks.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss'],
})
export class ProjectTasksComponent implements OnInit {
  public tasks: TaskModel[];
  public projectId: number;
  constructor(
    private modalCtrl: ModalController,
    private tasksNetworkService: TasksNetworkService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.url.subscribe((res: UrlSegment[]) => this.getProjectById(res[0].path));
  }

  public async createTask(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
    });

    await modal.present();

    modal.onWillDismiss().then((res) => {
      if (res.data) {
        this.tasksNetworkService
          .createTask(res.data.title, this.projectId)
          .pipe(
            mergeMap(() => this.tasksNetworkService.getTasksByProjectId(this.projectId)),
            first(),
          )
          .subscribe((tasks) => (this.tasks = tasks));
      }
    });
  }

  public deleteTask(taskId: number): void {
    this.tasksNetworkService
      .deleteTask(taskId)
      .pipe(
        mergeMap(() => this.tasksNetworkService.getTasksByProjectId(this.projectId)),
        first(),
      )
      .subscribe((tasks) => (this.tasks = tasks));
  }

  private getProjectById(url: string): void {
    this.projectId = +url.slice(url.lastIndexOf('/') + 1, url.length);
    this.tasksNetworkService
      .getTasksByProjectId(this.projectId)
      .pipe(first())
      .subscribe((tasks) => (this.tasks = tasks));
  }
}
