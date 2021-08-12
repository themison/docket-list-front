import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { TaskModel } from 'src/app/shared/models/task.model';
import { TasksNetworkService } from 'src/app/shared/network-services/tasks.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss'],
})
export class ProjectTasksComponent implements OnInit {
  public tasks: TaskModel[];
  constructor(
    private router: Router,
    private tasksNetworkService: TasksNetworkService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.url.subscribe((res: UrlSegment[]) => this.getProjectById(res[0].path));
  }

  public ionViewWillEnter(): void {
    console.log(123);
  }

  private getProjectById(url: string): void {
    const projectId = +url.slice(url.lastIndexOf('/') + 1, url.length);
    this.tasksNetworkService.getTasksByProjectId(projectId).subscribe((tasks) => (this.tasks = tasks));
  }
}
