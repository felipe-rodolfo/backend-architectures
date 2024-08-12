"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
var TodoView = /** @class */ (function () {
    function TodoView() {
    }
    TodoView.prototype.render = function (todo) {
        var todoElement = document.createElement('li');
        todoElement.textContent = todo.text;
        return todoElement;
    };
    return TodoView;
}());
exports.TodoView = TodoView;
