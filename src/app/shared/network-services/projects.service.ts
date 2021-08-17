import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from '../models/project.model';
import { Observable } from 'rxjs';
import { URLS } from '../urls/urls';

@Injectable({ providedIn: 'root' })
export class ProjectsNetworkService {
  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<ProjectModel[]> {
    return this.httpClient.get<ProjectModel[]>(URLS.projects.getProjects);
  }

  public createProject(title: string): Observable<ProjectModel> {
    return this.httpClient.post<ProjectModel>(URLS.projects.createProject, { title });
  }

  public deleteProject(projectId: number): Observable<void> {
    return this.httpClient.delete<void>(URLS.projects.baseProject(projectId));
  }
}
