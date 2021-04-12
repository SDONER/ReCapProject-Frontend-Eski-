import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm : FormGroup;

  constructor( private carService:CarService, 
    carDetailService:CarService,
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService , 
    private formBuilder:FormBuilder 
    ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    console.log(this.carAddForm)
  }


  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      imagePath:["",Validators.required],
      carName:["",Validators.required],
      brandId:["",Validators.required],
      brandName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
      
    })
  }

  add(){
   if(this.carAddForm.valid){
    let carModel = Object.assign({},this.carAddForm.value) 
    this.carService.postBrand(carModel).subscribe(response=>{
      console.log(response)
      this.toastrService.success(response.message,"Araç kaydı yapıldı.")
    },responseError=>{
      console.log(responseError.error)
      this.toastrService.error(responseError.error)
      
    })
   }else{
     this.toastrService.error("Formdaki bilgiler boş olamaz!")
   }

  }
}
