System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
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
    var core_1;
    var ElvisComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ElvisComponent = (function () {
                function ElvisComponent() {
                    this.task = {
                        title: "Elvis Operator",
                        assignee: null
                    };
                }
                ElvisComponent = __decorate([
                    core_1.Component({
                        selector: 'elvis',
                        template: "\n        <ul>\n            <li>Title: {{task.title}}</li>\n            <li>Assignee:  {{task.assignee?.role?.name}}</li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ElvisComponent);
                return ElvisComponent;
            }());
            exports_1("ElvisComponent", ElvisComponent);
        }
    }
});
/*either the assignee  or the role is null we will get a blank string*/ 
//# sourceMappingURL=elvis.component.js.map