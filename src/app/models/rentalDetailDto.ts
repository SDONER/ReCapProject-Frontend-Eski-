import { Rental } from './rental';

export interface RentalDetail {
  Id: number;
  CustomerId:string;
  ColorId:number;
  BrandId:Number;
  UserId:Number;
  CompanyName:string;
  ModelYear:number;
  Description:string;
  DailyPrice:number;
  FirstName:string;
  LastName:string;
  RentDate:Date;
  ReturnDate: Date ;
  BrandName: string;
  CarId:number;
  EMail:string;
  Pasword:string;
}