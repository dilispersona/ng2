import {Component} from 'angular2/core';

@Component({
    selector: 'elvis',
    template:`
        <ul>
            <li>Title: {{task.title}}</li>
            <li>Assignee:  {{task.assignee?.role?.name}}</li>
        </ul>
    ` 
})

export class ElvisComponent{
    task = {
        title: "Elvis Operator",
        assignee: null
    }

}

/*either the assignee  or the role is null we will get a blank string*/