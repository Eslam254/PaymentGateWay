import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get('code/country');
  }

  getAllCurrencies(): Observable<any> {
    return this.http.get<any>('code/currency');
  }

  getAllTimeZones(): Observable<any> {
    return this.http.get<any>('code/timezone');
  }
}
