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
var app_service_title_1 = require('../../services/app.service.title');
var ListComponent = (function () {
    function ListComponent(service) {
        this.service = service;
        this.currentPage = 1;
        this.totalItems = 64;
        this.dataService = service;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.titles = this.dataService.getAll();
    };
    ListComponent.prototype.onSelect = function (title) {
        this.selectedTitle = title;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'title-list',
            templateUrl: 'app/components/list/list.component.html',
            providers: [app_service_title_1.DataService]
        }), 
        __metadata('design:paramtypes', [app_service_title_1.DataService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map