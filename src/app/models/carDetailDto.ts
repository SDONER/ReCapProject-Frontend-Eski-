import { Brand } from './brand';

export interface CarDetail {
  id: number;
  carName: string;
  brandId: number;
  brandName: string;
  colorName: string;
  colorId: number;
  modelYear: number;
  dailyPrice: number;
  description: string;
  imagePath : string[];
  carId: number;
  date:Date;

}