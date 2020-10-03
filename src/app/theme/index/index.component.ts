import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import  {FeedbackService} from '../../service/feedback-service';
import {FeedbackRespModel} from '../../response-model/feedback-resp-model';
declare const owlCarousel: any;
declare const testimonialOwlCarousel: any;
declare const counterJS: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss','../../../assets/css/common.css']
})


export class IndexComponent implements OnInit {
   
  feedbackList : Array<FeedbackRespModel>;

 
    constructor(private feedbackService: FeedbackService) { }
    ngOnInit() {
      //this.getFeedback();
      owlCarousel();
      testimonialOwlCarousel();
  
    }
    ngOnDestroy(){
       
    }
    
    public getFeedback() {
      this.feedbackService.getAllFeedBack().subscribe((resp) => {
        if (resp['status'] == 'success') {
          this.feedbackList = resp['data'];
          console.log(this.feedbackList);
        } else {
          console.log("Error : " + resp['message']);
        }
      });
    }
  

  }


