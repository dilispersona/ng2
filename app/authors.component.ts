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
        `,
    providers: [AuthorService]
    
})

export class AuthorComponent{
    title = "title for the authors goes here";
    authors;
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}
