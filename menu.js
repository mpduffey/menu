"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Menu = (function () {
    function Menu() {
    }
    __decorate([
        core_1.Input("menu-object"), 
        __metadata('design:type', Object)
    ], Menu.prototype, "menu", void 0);
    Menu = __decorate([
        core_1.Component({
            selector: 'ng-menu',
            template: "\n\t\t<div class=\"dropdown\">\n\t\t\t<i class=\"{{menu.icon}}\" data-toggle=\"dropdown\"></i>\n\t\t\t<ul class=\"dropdown-menu\" [ngClass]=\"{'dropdown-menu-right': menu.menuRight}\" aria-labelledby=\"dropdownMenu1\">\n\t\t\t\t<li *ngFor=\"let item of menu.items\" (click)=\"item.action(item)\"><a href=\"#\">{{item.label}}</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t",
            styles: ["\n\t\t.dropdown-menu {\n\t\t\tposition:\t\tabsolute;\n\t\t}\n\t"],
            host: {
                style: "\n\t\tposition:\t\trelative;\n\t\t"
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map