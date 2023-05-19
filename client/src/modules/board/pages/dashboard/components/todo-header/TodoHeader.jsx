import React from 'react';

import './TodoHeader.css';

export default function TodoHeader({addTodo, setAddTodo}) {
  return (
    <div className="dashboard-todo__title df df-c-sb">
      <h4 className="dashboard-todo__title_heading">
        Todo
      </h4>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
        onClick={() => setAddTodo(!addTodo)}
      >
        <path d="M7 12V7M7 7V2M7 7H2M7 7H12" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
