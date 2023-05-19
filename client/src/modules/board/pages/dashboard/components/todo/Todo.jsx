import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadTodo } from '../../../../../../store/todo/todo-actions';

import TodoHeader from '../todo-header/TodoHeader';
import TodoAdd from '../todo-add/TodoAdd';
import TodoList from '../todo-list/TodoList';

import './Todo.css';

export default function Todo() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.todo);
  const { id } = useSelector(state => state.myUser.entities);
  const loadedUser = useSelector(state => state.myUser.loaded);
  
  const [addTodo, setAddTodo] = useState(false);
  
  useEffect(() => {
    if (loadedUser && loading === 'idle') dispatch(loadTodo(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);
  
  return (
    <section className="dashboard-todo">
      <TodoHeader addTodo={addTodo} setAddTodo={setAddTodo}/>
      { addTodo 
        ?
        <TodoAdd setAddTodo={setAddTodo}/>
        :
        <TodoList />
      }
    </section>
  );
}