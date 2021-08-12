import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProjectModel } from '../../shared/models/project.model';
import { ProjectsNetworkService } from '../../shared/network-services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectModel[];

  constructor(private projectsNetworkService: ProjectsNetworkService) {}

  ngOnInit() {
    this.getFolders();
  }

  private getFolders(): void {
    this.projectsNetworkService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
