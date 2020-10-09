"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllServicesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_nouislider_1 = require("ng2-nouislider");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var core_2 = require("@agm/core");
var body_polish_component_1 = require("./body-polish/body-polish.component");
var car_denting_painting_component_1 = require("./car-denting-painting/car-denting-painting.component");
var ceramic_coating_component_1 = require("./ceramic-coating/ceramic-coating.component");
var detailing_component_1 = require("./detailing/detailing.component");
var engine_coating_component_1 = require("./engine-coating/engine-coating.component");
var front_glass_treatment_component_1 = require("./front-glass-treatment/front-glass-treatment.component");
var interior_cleaning_component_1 = require("./interior-cleaning/interior-cleaning.component");
var rusting_coating_component_1 = require("./rusting-coating/rusting-coating.component");
var teflon_coating_component_1 = require("./teflon-coating/teflon-coating.component");
var all_services_component_1 = require("./all-services.component");
var AllServicesModule = /** @class */ (function () {
    function AllServicesModule() {
    }
    AllServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ng2_nouislider_1.NouisliderModule,
                jw_bootstrap_switch_ng2_1.JwBootstrapSwitchNg2Module,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                body_polish_component_1.BodyPolishComponent,
                car_denting_painting_component_1.CarDentingPaintingComponent,
                ceramic_coating_component_1.CeramicCoatingComponent,
                detailing_component_1.Detailing,
                engine_coating_component_1.EngineCoatingComponent,
                front_glass_treatment_component_1.FrontGlassTreatmentComponent,
                interior_cleaning_component_1.InteriorCleaningComponent,
                rusting_coating_component_1.RustingCoatingComponent,
                teflon_coating_component_1.TeflonCoatingComponent,
                all_services_component_1.AllServicesComponent
            ]
        })
    ], AllServicesModule);
    return AllServicesModule;
}());
exports.AllServicesModule = AllServicesModule;
