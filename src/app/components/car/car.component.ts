import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  currentCar :Car;
  dataLoaded = false;
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
        
      }else if(params["colorId"]) {
        this.getCarsByColor(params["colorId"])

      }else if(params["id"]) {
        this.getCarsById(params["id"])

      }else{
        this.getCars()
      }
    })
  }
  
  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar= car;
    console.log(car.id)
  }

  getCurrentCarClass(car:Car){
   if(car==this.currentCar){
     return "button-item active"
   }else{
    return "button-item "
   }
  }
  
  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsById(Id:number) {
    this.carService.getCarsById(Id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  
}
