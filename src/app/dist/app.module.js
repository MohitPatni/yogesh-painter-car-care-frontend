"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var animations_1 = require("@angular/platform-browser/animations"); // this is needed!
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var components_module_1 = require("./components/components.module");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var footer_component_1 = require("./shared/footer/footer.component");
var theme_module_1 = require("./theme/theme.module");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                jw_bootstrap_switch_ng2_1.JwBootstrapSwitchNg2Module,
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                components_module_1.ComponentsModule,
                theme_module_1.ThemeModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
