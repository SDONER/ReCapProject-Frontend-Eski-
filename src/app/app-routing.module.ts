import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
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
  {path:"car/add",component:CarAddComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
