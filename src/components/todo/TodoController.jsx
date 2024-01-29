import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const todoObj = {
    id: 1,
    title: "",
    content: "",
    isDone: false,
};

export const TodoController = () => {
    const [todos, setTodos] = useState([todoObj]);
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
    return (
        <main>
            <TodoForm onSubmitTodo={onSubmitTodo} />
            <TodoList
                todos={todos}
                onDelTodo={onDelTodo}
                onToggleTodo={onToggleTodo}
            />
        </main>
    );
};
