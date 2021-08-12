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
}
