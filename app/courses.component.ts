'use strict';

import { Component } from 'angular2/core';
import { CourseService } from './courses.service';
import { AuthorService } from './authors.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
        <h2>Authors</h2>
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
        `,
    providers: [CourseService,AuthorService]
})

export class CoursesComponent {
    title = "title for the courses goes here";
    courses;
    authors;
    constructor(courseService: CourseService, authorService: AuthorService){
        this.courses = courseService.getCourses();
        this.authors = authorService.getAuthors();
    }
}