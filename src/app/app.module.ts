import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {appRoutes} from './routes'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import { CarSearchPipe } from './car-search.pipe';
import { ColorSearchPipe } from './color-search.pipe';
import { BrandSearchPipe } from './brand-search.pipe';
import { RentDetailComponent } from './components/rent-detail/rent-detail.component';

import {ToastrModule} from 'ngx-toastr';
import { BankComponent } from './components/bank/bank.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    CustomerComponent,
    ColorComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    HomeComponent,
    CarSearchPipe,
    ColorSearchPipe,
    BrandSearchPipe,
    RentDetailComponent,
    BankComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }) 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
