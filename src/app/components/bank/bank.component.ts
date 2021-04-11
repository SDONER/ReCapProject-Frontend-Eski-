import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bank } from 'src/app/models/Bank';
import { BankService } from 'src/app/services/bank.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  banks : Bank;

  constructor(private carService:CarService, private brandservice:BrandService,
    private colorService:ColorService , private bankService:BankService,
    private activatedRoute:ActivatedRoute, private rentalService:RentalService,
    private toastrService:ToastrService  ) { }

  ngOnInit(): void {
    console.log(this.banks);
  }

  postBank(bank:Bank) {
    this.bankService.postBank(bank).subscribe(response=>{
      this.banks = bank;
      
    })
  }

}
