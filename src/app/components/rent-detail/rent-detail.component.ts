import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetailDto';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetailDto';
import { RentDetail } from 'src/app/models/rentDetail';
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
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  currentRentDetail: Rental;
  currentimagesDetail: RentalDetail;
  images: CarDetail[] = [];
  apiUrl = 'https://localhost:44381';

  constructor(
    private rentService: RentalService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getRentsByRentDetail(params['carId']);
      }
    });
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
        'Bu araç girilen tarihler arasında kiralamaya uygun değildir.Lütfen farklı bir tarih seçiniz.',
        this.rentDetails.carName
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
}
