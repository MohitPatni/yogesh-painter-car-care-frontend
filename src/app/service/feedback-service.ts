import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as appConstants from '../app-constant';

@Injectable({
    providedIn: 'root'
})

export class FeedbackService {

    private apiUrl = appConstants.baseURL + "feedback-end-user/";

    constructor(private httpClient: HttpClient) {
    }
    
    public getAllFeedBack(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
    }

}