import { Todo } from '../models/todo';

export class TodoView {
    render(todo: Todo) {
        const todoElement = document.createElement('li');
        todoElement.textContent = todo.text;
        return todoElement;
    }
}
