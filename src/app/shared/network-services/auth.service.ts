import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from '../urls/urls';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(URLS.auth.login, { username, password });
  }
}
