import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
   
  
 
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
