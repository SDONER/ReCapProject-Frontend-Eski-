import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm : FormGroup;

  constructor( private brandService:BrandService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService , 
    private formBuilder:FormBuilder 
    ) { }

  ngOnInit(): void {
    this.createBrandAddForm();
    console.log(this.brandAddForm)
  }


  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required],
      carId:["",Validators.required],

    })
  }

  add(){
    if(this.brandAddForm.valid){
    let brandModel = Object.assign({},this.brandAddForm.value) 
    this.brandService.postBrand(brandModel).subscribe(response=>{
      console.log(response)
      this.toastrService.success(response.message,"Marka kaydı yapıldı.")
    })
    }else{
      this.toastrService.error("Formdaki bilgiler boş olamaz!")
    }
  }
}
