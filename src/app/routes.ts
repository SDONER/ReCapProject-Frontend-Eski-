import { CarComponent } from "./components/car/car.component";
import {RouterModule, Routes} from "@angular/router"
import {CarDetailComponent } from "./components/car-detail/car-detail.component";
import { NgModule } from "@angular/core";


export const appRoutes:Routes = [
{path:"",pathMatch:"full",component:CarComponent},
{path:"car",component:CarComponent},
{path:"**",redirectTo:"car",pathMatch:"full"},
{path:"car-detail",component:CarDetailComponent},
{path:"cars/car-detail/:carId", component:CarDetailComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
