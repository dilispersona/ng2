
import { Component, Input, EventEmitter, Output } from 'angular2/core';

@Component({
    selector: 'star',
    template: `<i class="glyphicon"
                    [class.glyphicon-star-empty]="!isFavourite"
                    [class.glyphicon-star]="isFavourite"
                    (click)="onStarClick($event)" [style.cursor]="'pointer'">
                </i>`
})
export class StarComponent {

    @Input() isFavourite = false;

    @Output() change = new EventEmitter();

    onStarClick($event) {
        this.isFavourite = !this.isFavourite;
        this.change.emit({newValue: this.isFavourite});
    }

}


