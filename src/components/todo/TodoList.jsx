import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ headTitle, todos, onDelTodo, onToggleTodo }) => {
    return (
        <section>
            <h2>{headTitle}</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelTodo={onDelTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))}
            </ul>
        </section>
    );
};
