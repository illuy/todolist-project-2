import React from "react";
import styled from "styled-components";

const TodoCard = styled.li`
    width: auto;
    min-width: 300px;
    max-width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-left: 10px;
    &:nth-child(1) {
        margin-left: 0px;
    }
`;
const TodoCardArtiBox = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;
const TodoCardTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 20px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background-color: #555;
        opacity: 0.3;
        border-radius: 5px;
        z-index: -1;
    }
`;
const TodoCardCont = styled.p`
    /* margin-bottom: 30px; */
`;
const TodoCardTime = styled.time`
    margin-top: auto;
    font-size: 0.8rem;
    color: #555;
`;
const TodoCardBtnBox = styled.div`
    display: flex;
    margin-top: 10px;
`;
const TodoCardBtnBoxItem = styled.button`
    flex: 1;
    &:nth-child(1) {
        margin-right: 5px;
        background-color: tomato;
    }
    &:nth-child(2) {
        margin-right: 5px;
        background-color: ${(props) => (props.isDone ? "orange" : "royalblue")};
        /* {isDone ? "취소" : "완료"} */
    }
`;

export const TodoItem = ({ todo, onDelTodo, onToggleTodo }) => {
    const { id, title, content, isDone, deadline } = todo;
    const formattedDeadLine = new Date(deadline).toLocaleDateString("ko-kr", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    return (
        <TodoCard>
            <TodoCardArtiBox isDone={isDone}>
                <TodoCardTitle>{title}</TodoCardTitle>
                <TodoCardCont>{content}</TodoCardCont>
                <TodoCardTime>{formattedDeadLine}</TodoCardTime>
            </TodoCardArtiBox>
            <TodoCardBtnBox>
                <TodoCardBtnBoxItem onClick={() => onDelTodo(id)}>
                    삭제
                </TodoCardBtnBoxItem>
                <TodoCardBtnBoxItem
                    onClick={() => onToggleTodo(id)}
                    isDone={isDone}
                >
                    {isDone ? "취소" : "완료"}
                </TodoCardBtnBoxItem>
            </TodoCardBtnBox>
        </TodoCard>
    );
};
