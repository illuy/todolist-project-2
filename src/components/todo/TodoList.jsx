import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDelTodo, onToggleTodo }) => {
    return (
        <section>
            <h2>Working!</h2>
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
