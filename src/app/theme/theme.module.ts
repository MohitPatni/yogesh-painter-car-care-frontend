import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { AllServicesComponent } from './all-services/all-services.component';
import {ThemeComponent} from './theme.component'
import { AllServicesModule } from './all-services/all-services.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        AllServicesModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        AboutUsComponent,
        ContactUsComponent,
        IndexComponent,
        ThemeComponent,
        FooterComponent,
       
        
    ]
})
export class ThemeModule { }
