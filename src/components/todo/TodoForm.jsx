import React from "react";
import styled from "styled-components";

const TodoFrom = styled.form`
    padding: 10px;
`;
const TodoInput = styled.input`
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid royalblue;
    padding: 5px;

    &:focus {
        box-shadow: 0px 0px 3px royalblue;
        outline: none;
    }
`;
const TodoSubmitBtn = styled.button`
    background-color: royalblue;
`;
export const TodoForm = ({ onSubmitTodo }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;
        const deadline = e.target.deadline.value;

        if (!title || !content || !deadline) {
            alert("제목, 내용, 그리고 달력은 필수 입력 항목입니다.");
            return;
        }

        onSubmitTodo({
            id: crypto.randomUUID(),
            title,
            content,
            deadline,
            isDone: false,
        });
        e.target.reset();
    };
    return (
        <TodoFrom onSubmit={handleSubmit}>
            <TodoInput type="text" placeholder="제목" name="title" />
            <TodoInput type="text" placeholder="내용" name="content" />
            <TodoInput type="date" name="deadline" />
            <TodoSubmitBtn type="submit">제출</TodoSubmitBtn>
        </TodoFrom>
    );
};
