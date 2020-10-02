import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as appConstants from '../app-constant';

@Injectable({
    providedIn: 'root'
})

export class MasterService {

    private apiUrl = appConstants.baseURL + "master-services/";

    constructor(private httpClient: HttpClient) {
    }
    
    public getAllMasterServices(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
    }

}