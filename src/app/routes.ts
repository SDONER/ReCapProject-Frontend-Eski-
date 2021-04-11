import { CarComponent } from "./components/car/car.component";
import {RouterModule, Routes} from "@angular/router"
import {CarDetailComponent } from "./components/car-detail/car-detail.component";
import { NgModule } from "@angular/core";
import { RentDetailComponent } from "./components/rent-detail/rent-detail.component";


export const appRoutes:Routes = [
{path:"",pathMatch:"full",component:CarComponent},
{path:"car",component:CarComponent},
{path:"**",redirectTo:"car",pathMatch:"full"},
{path:"car-detail",component:CarDetailComponent},
{path:"cars/car-detail/:carId", component:CarDetailComponent},
{path:"car-detail",component:CarDetailComponent},
{path:"cars/car-detail/:carId", component:CarDetailComponent},
{path:"rent-detail",component:RentDetailComponent},
{path:"cars/rent-detail/:carId", component:RentDetailComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
