import { Payment } from './payment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
   }

   postGateWay(pay : Payment ) {
    return this.http.post('Payment',pay);
   }
}
