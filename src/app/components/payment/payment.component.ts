import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms'
import { Bank } from 'src/app/models/Bank';
import { BankService } from 'src/app/services/bank.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAddForm: FormGroup;

  constructor( private formBuilder:FormBuilder , private paymantService:BankService) { }

  ngOnInit(): void {
    this.createPaymentAddForm();
    console.log(this.paymentAddForm)
  }

  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      bankName:["",Validators.required],
      accountNumber:["",Validators.required],
      validThru:["",Validators.required],
      cvvCode:["",Validators.required],
      customerName:["",Validators.required],
      customerLastName:["",Validators.required],
    })

  }

  add(){
    let bankModel = Object.assign({},this.paymentAddForm.value) 
    console.log(bankModel)
  }

}
