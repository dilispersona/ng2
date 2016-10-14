'use strict';

import { Component } from 'angular2/core';
import { CourseService } from './courses.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { StarComponent } from './star.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';


@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2> 
        {{title}}<br/>
        <star [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></star>
        <input type="text" autoGrow  [(ngModel)]="title"/>
        <ul>
            <li *ngFor="#course of courses">
                {{course}}                
            </li>
        </ul>  
        <div (click)="onDivClick($event)">
            <button class="btn btn-primary" [style.color]="isActive ? 'white' : 'gray'" (click)="onClick($event)">Submit</button>     
        </div>        
        <voter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onVoteChange($event)"></voter>
       
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective, StarComponent, LikeComponent, VoterComponent]
})

export class CoursesComponent {
    title = "title for ";
    courses;
    isActive = true;   
    
    post = {
        title:"Title",
        isFavourite: true,
        likes: 10,
        voteCount: 10,
        myVote: 1
    }

    onVoteChange($event){
        console.log($event);
    }

    onFavouriteChange($event){
        console.log($event);
    }

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