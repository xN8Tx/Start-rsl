import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addComments } from '../../../store/comments/comments-slice';

import MyButton from '../../../ui/my-button/MyButton';
import LazyImg from '../../../ui/img/LazyImg';

import './CommentsForm.css';

export default function CommentsForm() {
  const dispatch = useDispatch();
  const { id: courseId } = useParams();  
  
  const { id, avatar, role } = useSelector(state => state.myUser.entities);
  
  const [value, setValue] = useState('');
  
  const uploadHandler = () => {
    if ( value.length !== 0 ) {
      if ( role !== 1) {
        const title = {
          user_id: id,
          course_id: courseId,
          body: value
        };
        dispatch(addComments(title));
      } else {
        toast.error('Вы не можете писать комментарии');
      }
    } else {
      toast.error('Сначала напишите что-нибудь!');
    }
  }; 
  
  return (
    <div className="w-100 df df-start is-gap">
      <div className="comments-form__avatar">
        <LazyImg 
          src={avatar}
          alt="avatar"
          className="my-avatar"
        />
      </div>
      <div className="comments-form__form df-column df-e-s i-gap">
        <input 
          type="text" 
          placeholder="Оставь свой комментарий" 
          className="comments-form__form_input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <MyButton onClick={() => uploadHandler()}>Оставить</MyButton>
      </div>
    </div>
  );
}
