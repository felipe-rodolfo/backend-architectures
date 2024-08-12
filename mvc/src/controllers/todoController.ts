import { Todo } from '../models/todo';
import { TodoView } from '../views/todoView';

export class TodoController {
    private model: Todo;
    private view: TodoView;

    constructor(todo: Todo) {
        this.model = todo;
        this.view = new TodoView();
    }

    updateTodo(newText: string) {
        this.model.text = newText;
        const updatedView = this.view.render(this.model);
    }
}
