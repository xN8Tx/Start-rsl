import React from 'react';
import { useSelector } from 'react-redux';

import CommentsForm from '../comments-form/CommentsForm';
import CommentsList from '../comments-list/CommentsList';

import './Comments.css';

export default function Comments() {
  const { loading, error } = useSelector(state => state.comments); 
  
  return (
    <>
      { loading === 'succeeded' && !error && 
        <section className="comments w-100 df-column df-start i-gap">
          <CommentsForm />
          <CommentsList/>
        </section>
      }
    </>
  );
}
