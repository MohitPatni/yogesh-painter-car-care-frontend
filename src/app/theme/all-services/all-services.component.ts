import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import {Router} from '@angular/router'

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss','../../../assets/css/common.css']
})
export class AllServicesComponent implements OnInit {
  
    constructor(private router: Router) {  this.router.url === '/login' }
    ngOnInit() {
      this.router.url === '/login'
      console.log(this.router.url)
    }
    ngOnDestroy(){
        
    }

}
