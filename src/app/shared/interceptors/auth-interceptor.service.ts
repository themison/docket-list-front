import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');
    let authReq = req.clone();

    if (authToken) {
      const headers = req.headers.set('Authorization', `Token ${authToken}`);
      authReq = req.clone({ headers });
    }

    return next.handle(authReq);
  }
}
