import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedServiceService } from '../services/shared-service.service';
@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private readonly router: Router,
    public sharedServiceService: SharedServiceService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
          }
        },
        (error: HttpErrorResponse) => {
          this.sharedServiceService.requestCount =
            this.sharedServiceService.requestCount - 1;
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
            this.toastr.error(errorMsg);
          } else {
            if (error.status === 0) {
              return throwError('');
            }
            if (error.status === 401 || error.status === 403) {
              localStorage.clear();
              sessionStorage.clear();
              this.router.navigate(['./auth']);
              return throwError('token expired !');
            } else if (error.status === 500) {
              this.toastr.error('SERVER ERROR !, try later thank you :)');
              return throwError(errorMsg);
            } else if (error.error?.Errors?.length) {
              errorMsg = `Message: ${error.error.Errors[0]}`;
              this.toastr.error(errorMsg);
              return throwError(errorMsg);
            } else {
              errorMsg = `Error: ${
                error.error == null ? 'Something Wrong!' : error.error.message
              }`;
              this.toastr.error(errorMsg);
              return throwError(errorMsg);
            }
          }
          return throwError(errorMsg);
        }
      )
    );
  }
}
