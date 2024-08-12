import { Todo } from './models/todo';
import { TodoController } from './controllers/todoController';

const todo: Todo = {
    id: 1,
    text: 'Learn MVC',
    completed: false,
};

const controller = new TodoController(todo);
