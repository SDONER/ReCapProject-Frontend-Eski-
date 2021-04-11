import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentDetailComponent } from './components/rent-detail/rent-detail.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"colors",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/getbycardetails/:id",component:CarDetailComponent},
  {path:"rentals",component:RentDetailComponent},
  {path:"rentals/getrentdetails/:carId",component:RentDetailComponent},
  {path:"payment",component:PaymentComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"brands/add",component:BrandComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
