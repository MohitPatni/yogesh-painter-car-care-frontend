"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThemeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_nouislider_1 = require("ng2-nouislider");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var core_2 = require("@agm/core");
var about_us_component_1 = require("./about-us/about-us.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var index_component_1 = require("./index/index.component");
var theme_component_1 = require("./theme.component");
var all_services_module_1 = require("./all-services/all-services.module");
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ng2_nouislider_1.NouisliderModule,
                all_services_module_1.AllServicesModule,
                jw_bootstrap_switch_ng2_1.JwBootstrapSwitchNg2Module,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                about_us_component_1.AboutUsComponent,
                contact_us_component_1.ContactUsComponent,
                index_component_1.IndexComponent,
                theme_component_1.ThemeComponent,
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;
