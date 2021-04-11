import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44381/api/brands/getall';
  constructor(private httpClient: HttpClient) {}

  getBrands():Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall" 
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  postBrand(brand:Brand):Observable<ResponseModel> {
    let newPath = this.apiUrl + "brands/add" 
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", brand);
  }

}