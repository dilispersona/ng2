System.register(['angular2/core', './courses.service', './auto-grow.directive', './star.component', './like.component', './voter.component'], function(exports_1, context_1) {
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
    var core_1, courses_service_1, auto_grow_directive_1, star_component_1, like_component_1, voter_component_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "title for ";
                    this.isActive = true;
                    this.post = {
                        title: "Title",
                        isFavourite: true,
                        likes: 10,
                        voteCount: 10,
                        myVote: 1
                    };
                    this.courses = courseService.getCourses();
                    // this.authors = authorService.getAuthors();
                }
                CoursesComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                CoursesComponent.prototype.onFavouriteChange = function ($event) {
                    console.log($event);
                };
                CoursesComponent.prototype.onClick = function ($event) {
                    console.log($event);
                    // $event.stopPropagation();
                };
                CoursesComponent.prototype.onDivClick = function ($event) {
                    console.log($event.target.parentElement);
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2> \n        {{title}}<br/>\n        <star [isFavourite]=\"post.isFavourite\" (change)=\"onFavouriteChange($event)\"></star>\n        <input type=\"text\" autoGrow  [(ngModel)]=\"title\"/>\n        <ul>\n            <li *ngFor=\"#course of courses\">\n                {{course}}                \n            </li>\n        </ul>  \n        <div (click)=\"onDivClick($event)\">\n            <button class=\"btn btn-primary\" [style.color]=\"isActive ? 'white' : 'gray'\" (click)=\"onClick($event)\">Submit</button>     \n        </div>        \n        <voter [voteCount]=\"post.voteCount\" [myVote]=\"post.myVote\" (vote)=\"onVoteChange($event)\"></voter>\n       \n        ",
                        providers: [courses_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective, star_component_1.StarComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map