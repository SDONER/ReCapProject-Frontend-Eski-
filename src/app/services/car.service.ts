import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/GetCarsByColorId?colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsById(Id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbycarid?="+Id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "cars/getcardetailsbycarid?carId=" + id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getimagebycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}


