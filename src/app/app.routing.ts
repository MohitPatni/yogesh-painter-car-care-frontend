import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {IndexComponent} from './theme/index/index.component';
import {AboutUsComponent } from './theme/about-us/about-us.component';
import {ContactUsComponent} from './theme/contact-us/contact-us.component'
import {AllServicesComponent} from './theme/all-services/all-services.component'

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: IndexComponent },
    { path: 'home',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'about_us',     component: AboutUsComponent }, 
    { path: 'contact_us',     component: ContactUsComponent },
    { path: 'car_denting_painting',     component: AllServicesComponent },
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
export class AppRoutingModule { }
