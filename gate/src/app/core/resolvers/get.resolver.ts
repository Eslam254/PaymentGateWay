import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { empty, forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root',
})
export class GetResolver<T> implements Resolve<T> {
  constructor(
    private readonly http: HttpClient,
    private readonly spinner: NgxSpinnerService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<T> {
    const routeData = route.data.resolveEndPoint;
      return this.http.get<T>(routeData).pipe(
        catchError((error) => {
          return empty();
        })
      );
  }
}


