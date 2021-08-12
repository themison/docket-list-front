import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input()
  project: ProjectModel;

  constructor(private router: Router) {}

  ngOnInit() {}

  public showTasks(): void {
    this.router.navigate([`docket-list/${this.project.id}`]);
  }
}
