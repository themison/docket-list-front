import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProjectModel } from 'src/app/shared/models/project.model';
import { ProjectsNetworkService } from 'src/app/shared/network-services/projects.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input()
  public project: ProjectModel;

  @Output()
  public refreshProjects = new EventEmitter<void>();

  constructor(private router: Router, private projectNetworkService: ProjectsNetworkService) {}

  ngOnInit() {}

  public showTasks(): void {
    this.router.navigate([`docket-list/${this.project.id}`]);
  }

  public deleteProject(): void {
    this.projectNetworkService
      .deleteProject(this.project.id)
      .pipe(first())
      .subscribe(() => this.refreshProjects.emit());
  }
}
