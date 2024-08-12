"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
var todoView_1 = require("../views/todoView");
var TodoController = /** @class */ (function () {
    function TodoController(todo) {
        this.model = todo;
        this.view = new todoView_1.TodoView();
    }
    TodoController.prototype.updateTodo = function (newText) {
        this.model.text = newText;
        var updatedView = this.view.render(this.model);
    };
    return TodoController;
}());
exports.TodoController = TodoController;
