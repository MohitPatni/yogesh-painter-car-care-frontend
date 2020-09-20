import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';


@Component({
  selector: 'app-index',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','../../../assets/css/common.css']
})


export class FooterComponent implements OnInit {
   
   
 
    constructor() { }
    ngOnInit() {
       
        
        // var body = document.getElementsByTagName('body')[0];
        // body.classList.add('index-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
        
       
    }
    ngOnDestroy(){
        // var body = document.getElementsByTagName('body')[0];
        // body.classList.remove('index-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    }


}
