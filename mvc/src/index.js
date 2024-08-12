"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoController_1 = require("./controllers/todoController");
var todo = {
    id: 1,
    text: 'Learn MVC',
    completed: false,
};
var controller = new todoController_1.TodoController(todo);
