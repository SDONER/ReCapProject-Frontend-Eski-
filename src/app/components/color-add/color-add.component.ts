import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm : FormGroup;

  constructor( private colorService:ColorService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService , 
    private formBuilder:FormBuilder 
    ) { }

  ngOnInit(): void {
    this.createColorAddForm();
    console.log(this.colorAddForm)
  }


  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:["",Validators.required],
      carId:["",Validators.required],

    })
  }

  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value) 
      this.colorService.postColor(colorModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Marka kaydı yapıldı.")
      })
      }else{
        this.toastrService.error("Formdaki bilgiler boş olamaz!")
      }
  }

  

}
