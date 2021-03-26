import { Brand } from './brand';

export interface CarDetail {
  Id: number;
  CarName: string;
  BrandId: number;
  BrandName: string;
  ColorName: string;
  ColorId: number;
  ModelYear: number;
  DailyPrice: number;
  Description: string;
}