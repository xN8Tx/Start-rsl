import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from '../todo-item/TodoItem';
import HeadingFourth from '../../../../../../ui/heading/heading-fourth/HeadingFourth';

import './TodoList.css';

export default function TodoList() {
  const { entities, loading, error } = useSelector(state => state.todo);

  return (
    <div className="dashboard-todo__content df-column df-center is-gap">
      { entities.length === 0 && <HeadingFourth>Добавьте свою первую задачу</HeadingFourth> }
      { !error && loading === 'succeeded' && 
        <>
          {entities.map(todo => (
            <TodoItem key={todo.id} id={todo.id} _status={todo.status} title={todo.body}/>
          ))}
        </>
      }
    </div>
  );
}
