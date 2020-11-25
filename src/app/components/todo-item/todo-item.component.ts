import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() item:Todo;

    constructor() {
        this.item = new Todo();
    }

    ngOnInit(): void {
    }

    // The [ngClass] directive used in the html allows for dynamic class binding of its methods
    setClasses() {
        // Set true/false values for desired styles
        let classes = {
            todo: true, // applies the todo class style to all todo div items
            'is-complete': this.item.completed // hyphenated strings require quotes
        }

        return classes;
    }

}
