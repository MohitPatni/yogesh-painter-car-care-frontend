import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import {BodyPolishComponent} from './body-polish/body-polish.component'
import {CarDentingPaintingComponent} from './car-denting-painting/car-denting-painting.component'
import {CeramicCoatingComponent} from './ceramic-coating/ceramic-coating.component'
import {Detailing} from './detailing/detailing.component'
import {EngineCoatingComponent } from './engine-coating/engine-coating.component'
import {FrontGlassTreatmentComponent} from './front-glass-treatment/front-glass-treatment.component'
import {InteriorCleaningComponent} from './interior-cleaning/interior-cleaning.component'
import {RustingCoatingComponent} from './rusting-coating/rusting-coating.component'
import {TeflonCoatingComponent} from './teflon-coating/teflon-coating.component'
import {AllServicesComponent} from './all-services.component'


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        BodyPolishComponent,
        CarDentingPaintingComponent,
        CeramicCoatingComponent,  
        Detailing,
        EngineCoatingComponent,
        FrontGlassTreatmentComponent,
        InteriorCleaningComponent,
        RustingCoatingComponent,
        TeflonCoatingComponent,
        AllServicesComponent
        
    ]
})
export class AllServicesModule { }
