import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  constructor( private colorService:ColorService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService 
    ) { }

  ngOnInit(): void {
  }

}
