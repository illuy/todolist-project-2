import React from "react";

export const TodoItem = ({ todo, onDelTodo, onToggleTodo }) => {
    const { id, title, content, isDone, deadline } = todo;
    const formattedDeadLine = new Date(deadline).toLocaleDateString("ko-kr", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    return (
        <li>
            <article>
                <h3>{title}</h3>
                <p>{content}</p>
                <time>{formattedDeadLine}</time>
                <div>
                    <button onClick={() => onDelTodo(id)}>삭제</button>
                    <button onClick={() => onToggleTodo(id)}>
                        {isDone ? "취소" : "완료"}
                    </button>
                </div>
            </article>
        </li>
    );
};
