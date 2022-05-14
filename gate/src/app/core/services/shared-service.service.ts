import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor(public readonly http: HttpClient) {}
  public langSource = new BehaviorSubject('ar');
  public currentlang = this.langSource.asObservable();
  public requestCount: number = 0;
  changeDatePickerLang(lang: string) {
    this.langSource.next(lang);
  }

  public get<TResponse>(type: string): Observable<TResponse> {
    return this.http.get<TResponse>(type);
  }

  public post<TInput, TResponse>(
    type: string,
    data: TInput
  ): Observable<TResponse> {
    return this.http.post<TResponse>(type, data);
  }

  public put<TInput, TResponse>(
    type: string,
    data: TInput
  ): Observable<TResponse> {
    return this.http.put<TResponse>(type, data);
  }

  public delete<TInput, TResponse>(
    type: string,
    id: TInput
  ): Observable<TResponse> {
    return this.http.delete<TResponse>(type, id);
  }

  private subject = new Subject<any>();


  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
