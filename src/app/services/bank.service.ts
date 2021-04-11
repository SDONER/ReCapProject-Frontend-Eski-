import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'node_modules2/rxjs/Observable';
import { Bank } from '../models/Bank';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  apiUrl = 'https://localhost:44381/api/';
  constructor( private httpClient: HttpClient) { }

  postBank(bank:Bank):Observable<ResponseModel> {
    let newPath = this.apiUrl + "brands/add" 
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", bank);
  }
}
