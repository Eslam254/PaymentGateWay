import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token: string = this.getToken();
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }
    if (!(request.body instanceof FormData)) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    } else {
      request = request.clone({
        headers: request.headers.set('Accept', 'multipart/form-data'),
      });
    }
    let url = request.url;
    if (!url.startsWith('./assets')) {
      url = environment.BASE_URL + url;
      request = request.clone({
        url: url,
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
  get _storage() {
    return localStorage;
  }
  getToken(): string {
    return this._storage.getItem('TOKEN') ?? '';
  }
}

