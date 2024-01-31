import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import styled from "styled-components";

const TodoListSort = styled.select`
    margin: 10px;
`;

export const TodoController = () => {
    const [todos, setTodos] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
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
    const onChangeSortOrder = (value) => {
        const nextSortOrder = value;
        setSortOrder(nextSortOrder);
        if (nextSortOrder === "asc") {
            setTodos((prevTodos) =>
                [...prevTodos].sort(
                    (a, b) => new Date(a.deadline) - new Date(b.deadline)
                )
            );
            return;
        }
        setTodos((prevTodos) =>
            [...prevTodos].sort(
                (a, b) => new Date(b.deadline) - new Date(a.deadline)
            )
        );
    };
    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);
    return (
        <main>
            <TodoForm onSubmitTodo={onSubmitTodo} />
            <div>
                <TodoListSort
                    value={sortOrder}
                    onChange={(e) => onChangeSortOrder(e.target.value)}
                >
                    <option value="asc">오름차순</option>
                    <option value="desc">내림차순</option>
                </TodoListSort>
            </div>
            <TodoList
                headTitle="Working!"
                todos={workingTodos}
                onDelTodo={onDelTodo}
                onToggleTodo={onToggleTodo}
            />
            <hr />
            <TodoList
                headTitle="Done!"
                todos={doneTodos}
                onDelTodo={onDelTodo}
                onToggleTodo={onToggleTodo}
            />
        </main>
    );
};
