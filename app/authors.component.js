System.register(['angular2/core', './authors.service'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authors_service_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.title = "title for the authors goes here";
                    this.courses = [];
                    this.viewMode = 'map';
                    this.books = {
                        title: "Angular2 for beginners",
                        pages: 500123123,
                        enrolled: 298930,
                        rating: 3.03434,
                        price: 123
                    };
                    this.authors = authorService.getAuthors();
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "<h2>Authors</h2>\n        {{ title }}        \n        <ul> \n            <li *ngFor=\"#author of authors\">\n                {{ author }}\n            </li>\n        </ul>   \n        <div *ngIf=\"courses.length > 0\">\n            List of courses here\n        </div>\n        <div *ngIf=\"courses.length == 0\">\n           You dont have any courses\n        </div>     \n        <ul class=\"nav nav-pills\">\n            <li><a (click)=\"viewMode = 'map'\">Map View </a></li>\n            <li><a (click)=\"viewMode = 'list'\"> List view</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\">Map view contents </template>\n            <template [ngSwitchWhen]=\"'list'\">List view contents</template>\n        </div>\n        <br/>\n        {{ books.title | uppercase}}\n        <br/>\n        {{ books.pages | number}}\n        <br/>\n        {{ books.enrolled | number: '2.2-2'}}\n        <br/>\n        {{ books.rating | number: '2.2-2'}}\n        <br/>\n        {{ books.price | currency: 'AUD': 'true'}}\n          <br/>\n        {{ books | json}}\n\n        ",
                        providers: [authors_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [authors_service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map