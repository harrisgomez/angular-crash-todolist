import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    @Output() addItem: EventEmitter<any> = new EventEmitter();

    title:string;

    constructor() {
        this.title = '';
    }

    ngOnInit(): void {
    }

    onSubmit() {
        const todo = {
            title: this.title,
            completed: false
        };

        // Just like delete, this needs to be emitted upwards
        this.addItem.emit(todo);
    }
}
