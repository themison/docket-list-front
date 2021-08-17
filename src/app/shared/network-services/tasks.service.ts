import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../models/task.model';
import { Observable } from 'rxjs';
import { URLS } from '../urls/urls';

@Injectable({ providedIn: 'root' })
export class TasksNetworkService {
  constructor(private httpClient: HttpClient) {}

  public getTasksByProjectId(id: number): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>(URLS.tasks.getTasks(id));
  }

  public createTask(title: string, project: number): Observable<TaskModel[]> {
    const body = {
      title,
      project,
    };
    return this.httpClient.post<TaskModel[]>(URLS.tasks.createTask, body);
  }

  public deleteTask(taskId: number): Observable<void> {
    return this.httpClient.delete<void>(URLS.tasks.baseTask(taskId));
  }
}
