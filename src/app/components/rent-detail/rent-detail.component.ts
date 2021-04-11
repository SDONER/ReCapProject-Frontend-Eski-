import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetailDto';
import { Rental } from 'src/app/models/rental';
import { RentDetail } from 'src/app/models/rentDetail';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css'],
})
export class RentDetailComponent implements OnInit {
  rentDetails: RentDetail;
  rentDate?: Date;
  rents: Rental[] = [];
  rentAddForm : FormGroup;
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  currentRentDetail: Rental;
  currentimagesDetail: Rental;
  images: CarDetail[] = [];
  apiUrl = 'https://localhost:44381';

  constructor(
    private rentService: RentalService,
    private rentDetailService : CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder 
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getRentsByRentDetail(params['carId']);
      }
    });

    this.createRentAddForm();
    console.log(this.rentAddForm)
  }
  getRentsByRentDetail(carId: number) {
    this.rentService.getRentDetails(carId).subscribe((response) => {
      this.rentService.rent = response.data[0];
      console.log(response.data);
    });
  }

  setCurrentRentDetail(rent: Rental) {
    this.currentRentDetail = rent;
    console.log(rent.carId);
  }

  addToRent() {
    this.rentDetails = this.rentService.rent;
    if (this.rentDetails.returnDate == null) {
      console.log(this.rentDetails.carName);
      this.toastrService.error(
        'kiralamaya uygun değildir.Lütfen farklı bir tarih seçiniz.',
        this.rentDetails.carName + " " +  this.rentDetails.rentDate + " " +  "tarihinde"
      );
    } else {
      if (this.rentDetails.rentDate == null) {
        this.toastrService.info(
          ' Araç kiralamak için uygundur.',
          this.rentDetails.carName
        );
      } else {
        this.toastrService.error(
          ' Kiralama ekranına yönlendirildiniz.',
          this.rentDetails.carName
        );
      }
    }
  }

  createRentAddForm(){
    this.rentAddForm = this.formBuilder.group({
      colorName:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      companyName:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      brandId:["",Validators.required],
      brandName:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      imagePath:["",Validators.required],
      email:["",Validators.required],
      decription:["",Validators.required]

    })
  }

  add(){
    let rentModel = Object.assign({},this.rentAddForm.value) 
    console.log(rentModel)
  }
}
