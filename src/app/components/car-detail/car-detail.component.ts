import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetailDto';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  cars: Car[] = [];
  currentDetail: Car;

  images: CarDetail[] = [];
  imageUrl= 'https://localhost:44381';
  currentimagesDetail : CarDetail;

  rentDetails: Rental[]=[];
  rents :Rental[]=[];
  currentRent : Rental;



  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByCarDetail(params['id']);
        this.getCarImagesByCarId(params['id']);
        this.setCurrentRent(params['id']);
      }
    });
  }

  getCarsById(Id: number) {
    this.carService.getCarsById(Id).subscribe((response) => {
      this.cars = response.data;
      console.log(response.data);
      console.log(this.cars);
    });
  }

  getCarsByCarDetail(id: number) {
    console.log('params:' + id);
    this.carService.getCarDetails(id).subscribe((response) => {
      this.cars = response.data;
      console.log(response.data);
      console.log(this.cars);
    });
  }

  getCarImagesByCarId(Id: number) {
    this.carService.getCarImagesByCarId(Id).subscribe((response) => {
      this.images = response.data;
      console.log(response.data);
    });
  }

  setCurrentDetail(car: Car) {
    this.currentDetail = car;
    console.log(car.id);
  }

  setCurrentImageClass(imagePath:string){
    if(this.imageUrl=== this.currentimagesDetail.imagePath[0]){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }

  setCurrentRent(rent: Rental) {
    this.currentRent = rent;
    console.log(rent.carId);
  }

  
}
