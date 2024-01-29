import React from "react";

export const TodoItem = ({ todo, onDelTodo, onToggleTodo }) => {
    const { id, title, content, isDone } = todo;
    return (
        <li>
            <article>
                <h3>{title}</h3>
                <p>{content}</p>
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
