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

  constructor( private colorService:BrandService, 
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
      colorName:["",Validators.required],
      carId:["",Validators.required],

    })
  }

  add(){
    let brandModel = Object.assign({},this.brandAddForm.value) 
    console.log(brandModel)
  }


}
