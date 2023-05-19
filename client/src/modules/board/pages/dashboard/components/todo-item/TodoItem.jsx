import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo, statusTodo } from '../../../../../../store/todo/todo-actions';

import TextMain from '../../../../../../ui/text/text-main/TextMain';

import TrashSvg from '../../../../../../assets/svg/TrashSvg';
import PlusSvg from '../../../../../../assets/svg/PlusSvg';

import './TodoITem.css';

export default function TodoItem({_status, title, id}) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(_status);
  
  return (
    <div className="w-100 df df-c-sb">
      <div className="df df-c-s ixs-gap">
        <div 
          className="dashboard-todo-item__info_status df df-center"
          data-status={status}
          onClick={() => {
            dispatch(statusTodo({id: id, title: { status: !status }}));
            setStatus(!status);
          }}
        >
          <PlusSvg />
        </div>
        <TextMain>
          {title}
        </TextMain>
      </div>
      <div onClick={() => dispatch(deleteTodo(id))}>
        <TrashSvg/>
      </div>
    </div>
  );
}
