import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './authors.component';
import { TweetsComponent } from './tweets.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1>
        <courses></courses>
        <authors></authors>
         <div [style.margin]="100">
            <tweets></tweets>
        </div>`,
    directives: [CoursesComponent,AuthorComponent,TweetsComponent]
})
export class AppComponent {
    
 }