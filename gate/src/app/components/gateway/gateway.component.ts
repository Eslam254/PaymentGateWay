import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/payment.service';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})
export class GatewayComponent implements OnInit {

  submitted = false;

  form: FormGroup;


  constructor(private paymentService: PaymentService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      cardHolder:['',[Validators.required,Validators.minLength(3)]],
      procesingCode:['',[Validators.required,Validators.minLength(3)]],
      systemTraceNr:['',[Validators.required,Validators.minLength(3)]],
      functionCode:['',[Validators.required,Validators.minLength(11)]],
      cardNumber: ['',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      amountTrxn: ['', Validators.required],
      currencyCode: ['', Validators.required],
    })

  }
  get paymentFormControl(){
    return this.form.controls;
  }
  ReactiveFormSubmit(){
    this.submitted=true;

    if(this.form.valid)
    {
      var paymentdata = this.form.value;
      this.paymentService.postGateWay(paymentdata).subscribe(result => {
        console.log(result);
      });
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.form.value)

    }
  }

}
