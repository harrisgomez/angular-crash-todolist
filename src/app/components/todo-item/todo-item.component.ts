import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'; // Inject service into constructor to use

import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() item: Todo;
    @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService:TodoService) {
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

    onToggle(item: any) {
        // Toggles in UI
        item.completed = !item.completed;

        // Toggles in server
        this.todoService.toggleCompleted(item).subscribe(item => console.log(item));
    }

    onDelete(item: any) {
        // Event is emitted up to the 'todos.component'
        this.deleteItem.emit(item);
    }

}
