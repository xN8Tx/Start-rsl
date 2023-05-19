import React from 'react';
import { useSelector } from 'react-redux';

import CommentsItem from '../comments-item/CommentsItem';
import Empty from '../../empty/Empty';

export default function CommentsList() { 
  const comments = useSelector(state => state.comments.entities);
  
  return (
    <div className="w-100 df-column df-start i-gap">
      { comments.length === 0 && <Empty /> }
      { comments.length !== 0 && comments.map((comment) => (
        <CommentsItem 
          key={comment.id}
          id={comment.id}
          userId={comment.userId}
          cover={comment.avatar}
          name={comment.name}
          surname={comment.surname}
          date={comment.date}
          body={comment.body}
          likes={comment.likes}
          dislikes={comment.dislikes}
        />
      ))}
    </div>
  );
}
