import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
declare const imgGal: any;

@Component({
  selector: 'car-denting-painting',
  templateUrl: './car-denting-painting.component.html',
  styleUrls: ['./car-denting-painting.component.scss','../../../../assets/css/common.css']
})
export class CarDentingPaintingComponent implements OnInit {
  
    constructor() {  }
    ngOnInit() {
      // imgGal();
    }
    ngOnDestroy(){
        
    }

}
