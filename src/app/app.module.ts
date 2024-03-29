import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemeModule } from './theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from '@angular/common/http';
import { AllServicesComponent } from './theme/all-services/all-services.component';
import {AllServicesModule}  from './theme/all-services/all-services.module';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
  
      
    ],
    imports: [
        BrowserAnimationsModule,
        JwBootstrapSwitchNg2Module,
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,

        ThemeModule,
        
        
        
    ],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
