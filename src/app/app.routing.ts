import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {IndexComponent} from './theme/index/index.component';
import {AboutUsComponent } from './theme/about-us/about-us.component';
import {ContactUsComponent} from './theme/contact-us/contact-us.component'
import {AllServicesComponent} from './theme/all-services/all-services.component'
 

import {BodyPolishComponent} from '../app/theme/all-services/body-polish/body-polish.component'
import {CarDentingPaintingComponent} from '../app/theme/all-services/car-denting-painting/car-denting-painting.component'
import {CeramicCoatingComponent} from '../app/theme/all-services/ceramic-coating/ceramic-coating.component'
import {Detailing} from '../app/theme/all-services/detailing/detailing.component'
import {EngineCoatingComponent } from '../app/theme/all-services/engine-coating/engine-coating.component'
import {FrontGlassTreatmentComponent} from '../app/theme/all-services/front-glass-treatment/front-glass-treatment.component'
import {InteriorCleaningComponent} from '../app/theme/all-services/interior-cleaning/interior-cleaning.component'
import {RustingCoatingComponent} from '../app/theme/all-services/rusting-coating/rusting-coating.component'
import {TeflonCoatingComponent} from '../app/theme/all-services/teflon-coating/teflon-coating.component'



const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: IndexComponent },
    { path: 'home',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },

    { path: 'about_us',     component: AboutUsComponent }, 
    { path: 'contact_us',     component: ContactUsComponent },
    
    { path: 'car_denting_painting',     component: CarDentingPaintingComponent },
    { path: 'Body_polish',     component: AllServicesComponent },
    { path: 'detailing',     component: AllServicesComponent },
    { path: 'interior_cleaning',     component: AllServicesComponent },
    { path: 'engine_coating',     component: AllServicesComponent },
    { path: 'fornt_glass_treatment',     component: AllServicesComponent },
    { path: 'rusting_coating',     component: AllServicesComponent },
    { path: 'ceramic_coating',     component: AllServicesComponent },
    { path: 'teflon_coating',     component: AllServicesComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule {
  
 }
