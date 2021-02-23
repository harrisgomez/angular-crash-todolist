import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos:Todo[];

    // Use constructor for initializing properties and importing services
    constructor(private todoService:TodoService) {
        this.todos = [];
    }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }

    deleteItem(item:Todo) {
        // Deletes from the UI
        this.todos = this.todos.filter(t => t.id !== item.id);

        // Deletes from the server
        // Create .deleteTodo() in the service
        this.todoService.deleteTodo(item).subscribe();
    }

    addItem(item:Todo) {
        this.todoService.addTodo(item).subscribe(item => {
            this.todos.push(item);
        });
    }
}
