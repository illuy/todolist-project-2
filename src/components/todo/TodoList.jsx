import React from "react";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

const TodoListTitle = styled.h2`
    padding: 10px 10px 0 10px;
`;
const TodoCardList = styled.ul`
    padding: 10px;
    display: flex;
`;

export const TodoList = ({ headTitle, todos, onDelTodo, onToggleTodo }) => {
    return (
        <section>
            <TodoListTitle>{headTitle}</TodoListTitle>
            <TodoCardList>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelTodo={onDelTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))}
            </TodoCardList>
        </section>
    );
};
