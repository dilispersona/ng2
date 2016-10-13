'use strict';

import { Component } from 'angular2/core';
import { CourseService } from './courses.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}<br/>
        <input type="text" autoGrow  [(ngModel)]="title"/>
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>  
        <div (click)="onDivClick($event)">
            <button class="btn btn-primary" [style.color]="isActive ? 'white' : 'gray'" (click)="onClick($event)">Submit</button>     
        </div>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "title for ";
    courses;
    isActive = true;

    onClick($event){
        console.log($event);
       // $event.stopPropagation();
    }

    onDivClick($event) {        
        console.log($event.target.parentElement);
    }
   
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
       // this.authors = authorService.getAuthors();
    }
}