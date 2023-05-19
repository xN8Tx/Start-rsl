import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addTodo } from '../../../../../../store/todo/todo-actions';

import SmallInput from '../../../../../../ui/inputs/SmallInput/SmallInput';

import './TodoAdd.css';

export default function TodoAdd({setAddTodo}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  const id = useSelector(state => state.myUser.entities.id);
  
  const btnHandler = () => {
    if (value.length > 5) {
      const title = {
        body: value,
        user_id: id
      };
      
      dispatch(addTodo(title));
      setAddTodo(false);
    } else {
      toast.error('Напишите больше 5 символов');
    };
  };
  
  return (
    <div className="dashboard-todo-add df-column df-center i-gap">
      <SmallInput 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={() => btnHandler()}>Добавить</button>
    </div>
  );
}
