import React from 'react';
import './TodoItem.css';

export interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        done: boolean;
    }
};

function TodoItem({todo}: TodoItemProps) {
    return (
        // todo.done이 참이면 done 클래스를 적용 
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text">${todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    );
}

export default TodoItem;