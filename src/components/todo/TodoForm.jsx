import React from "react";

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="제목" name="title" />
            <input type="text" placeholder="내용" name="content" />
            <input type="date" name="deadline" />
            <button type="submit">제출</button>
        </form>
    );
};
