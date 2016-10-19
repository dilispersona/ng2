import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './authors.component';
import { TweetsComponent } from './tweets.component';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SignUpFormComponent } from './signup-form.component';
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2</h1>
        <courses></courses>
        <authors></authors>
         <div [style.margin]="100">
            <tweets></tweets>
        </div>
          <zippy title="Who can see my stuff?">
            Content of who can see my stuff
        </zippy>
        <zippy title="Who can contact me?">
            Content of who can contact me
        </zippy>
        <br/>
        <contact-form></contact-form>
        <div [style.margin]="100"></div>
        <signup-form></signup-form>
        `,
    directives: [CoursesComponent,AuthorComponent,TweetsComponent,
                 ZippyComponent, ContactFormComponent, SignUpFormComponent]
})
export class AppComponent {
   
 }