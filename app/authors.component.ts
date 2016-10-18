'use strict';

import { Component } from 'angular2/core';
import { AuthorService } from './authors.service';

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
        {{ title }}        
        <ul> 
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>   
        <div *ngIf="courses.length > 0">
            List of courses here
        </div>
        <div *ngIf="courses.length == 0">
           You dont have any courses
        </div>     
        <ul class="nav nav-pills">
            <li><a (click)="viewMode = 'map'">Map View </a></li>
            <li><a (click)="viewMode = 'list'"> List view</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'">Map view contents </template>
            <template [ngSwitchWhen]="'list'">List view contents</template>
        </div>
        <br/>
        {{ books.title | uppercase}}
        <br/>
        {{ books.pages | number}}
        <br/>
        {{ books.enrolled | number: '2.2-2'}}
        <br/>
        {{ books.rating | number: '2.2-2'}}
        <br/>
        {{ books.price | currency: 'AUD': 'true'}}
          <br/>
        {{ books | json}}

        `,
    providers: [AuthorService]
    
})

export class AuthorComponent{
    title = "title for the authors goes here";
    authors;
    courses = [];
    viewMode = 'map';
    
    books = {
        title: "Angular2 for beginners",
        pages: 500123123,
        enrolled: 298930,
        rating: 3.03434,
        price: 123
    }

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}
