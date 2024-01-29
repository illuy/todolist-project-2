import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoController = () => {
    const [todos, setTodos] = useState([]);
    const onSubmitTodo = (todo) => {
        setTodos((prevTodos) => [todo, ...prevTodos]);
    };
    const onDelTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    const onToggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todoItem) => {
                if (todoItem.id === id) {
                    return {
                        ...todoItem,
                        isDone: !todoItem.isDone,
                    };
                }

                return todoItem;
            })
        );
    };
    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);
    return (
        <main>
            <TodoForm onSubmitTodo={onSubmitTodo} />
            <TodoList
                headTitle="Working!"
                todos={workingTodos}
                onDelTodo={onDelTodo}
                onToggleTodo={onToggleTodo}
            />
            <TodoList
                headTitle="Done!"
                todos={doneTodos}
                onDelTodo={onDelTodo}
                onToggleTodo={onToggleTodo}
            />
        </main>
    );
};
