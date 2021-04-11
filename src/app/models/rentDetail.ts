export interface RentDetail {
    id: number;
    customerId: number;
    rentDate?:Date;
    returnDate?:Date;
    brandId: number;
    carId: number;
    carName: string;
    brandName: string;
    colorName: string;
    colorId: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    imagePath : string[];
    userID:number;
    companyName: string;
    firstName:string;
    lastName: string;
    email:string;
    password:string

  }