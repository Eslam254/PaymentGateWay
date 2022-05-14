

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public readonly http: HttpClient) { }
  public getAll(url: string,search:any): Observable<ArrayBuffer> {
    return this.http.post<ArrayBuffer>(url,search);
  }
  public downloadTempelete(url: string): Observable<any> {
    return this.http.get(url,{responseType: 'blob'});
  }
  public import(url: string,file:any): Observable<any> {
    var formData: any = new FormData();
    formData.append('File', file);
    return this.http.post(url,formData,{responseType: 'blob'});
  }


}
