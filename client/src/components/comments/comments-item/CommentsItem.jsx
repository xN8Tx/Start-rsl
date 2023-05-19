import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { dateTransform } from '../../../utils/date-transform';
import { deleteComments } from '../../../store/comments/comments-slice';
import { addDislike, addLike, deleteDislike, deleteLike } from '../../../store/comments/commetns-actions';

import HeadingFourth from '../../../ui/heading/heading-fourth/HeadingFourth';
import TextMain from '../../../ui/text/text-main/TextMain';
import TextSmall from '../../../ui/text/text-small/TextSmall';
import LazyImg from '../../../ui/img/LazyImg';

import LikeSvg from '../../../assets/svg/LikeSvg';
import DislikeSvg from '../../../assets/svg/DislikeSvg';

import './CommentsItem.css';

export default function CommentsItem({
  cover,
  name,
  surname,
  date,
  body,
  likes = [],
  dislikes,
  userId,
  id
}) {
  const dispatch = useDispatch();
  const myUser = useSelector(state => state.myUser.entities);
  
  const deleteHandler = (id) => dispatch(deleteComments(id));
  
  const canDelete = myUser.role >= 3 || myUser.id === userId;
  
  const likesHandler = () => {
    if (!dislikes.includes(myUser.id)) {
      if (!likes.includes(myUser.id)) {
        const newLikes = JSON.parse(JSON.stringify(likes));
        newLikes.push(myUser.id);
        dispatch(addLike({id,likes: newLikes}));
      } else if (likes.includes(myUser.id)) {
        const newLikes = JSON.parse(JSON.stringify(likes));
        dispatch(deleteLike({id, likes: newLikes.filter(el => el !== myUser.id)}));
      }
    } else {
      const newLikes = JSON.parse(JSON.stringify(likes));
      const newDislikes = JSON.parse(JSON.stringify(dislikes));
      newLikes.push(myUser.id);
      dispatch(addLike({id, likes: newLikes}));
      dispatch(deleteDislike({id, dislikes: newDislikes.filter(el => el !== myUser.id)}));
    }
  };
  
  const dislikesHandler = () => {
    if (!likes.includes(myUser.id)) {
      if (!dislikes.includes(myUser.id)) {
        const newDislikes = JSON.parse(JSON.stringify(dislikes));
        newDislikes.push(myUser.id);
        
        dispatch(addDislike({id, dislikes: newDislikes}));
      } else if (dislikes.includes(myUser.id)) {
        const newDislikes = JSON.parse(JSON.stringify(dislikes));
        
        dispatch(deleteDislike({id, dislikes: newDislikes.filter(el => el !== myUser.id)}));
      }
    } else {
      const newLikes = JSON.parse(JSON.stringify(likes));
      const newDislikes = JSON.parse(JSON.stringify(dislikes));
      newDislikes.push(myUser.id);
      
      dispatch(addDislike({id, dislikes: newDislikes}));
      dispatch(deleteLike({id, likes: newLikes.filter(el => el !== myUser.id)}));
    }
  };
  
  return (
    <div className="comments-item df df-start ixs-gap">
      <Link to={'/profile/' + userId}>
        <LazyImg 
          src={cover}
          alt="avatar"
          className="my-avatar"
        />
      </Link>
      <div className="w-100 df-column df-start ixs-gap">
        <Link to={'/profile/' + userId} className="df df-c-s ixs-gap">
          <HeadingFourth>{name} {surname}</HeadingFourth>
          <TextSmall>{dateTransform(date)}</TextSmall>
        </Link>
        <div className="comments-item__text">
          <TextMain>{body}</TextMain>
        </div>
        <div className="df df-c-s is-gap">
          <div className={likes.includes(myUser.id) ? 'comments-item__rating_item active df df-c-s' : 'comments-item__rating_item df df-c-s'} onClick={() => likesHandler()}>
            <LikeSvg />
            <TextSmall>{likes.length}</TextSmall>
          </div>
          <div className={dislikes.includes(myUser.id) ? 'comments-item__rating_item active df df-c-s' : 'comments-item__rating_item df df-c-s'} onClick={() => dislikesHandler()}>
            <DislikeSvg />
            <TextSmall>{dislikes.length}</TextSmall>
          </div>
          {canDelete &&           
            <div className="comments-item__rating_item df df-c-s" onClick={() => deleteHandler(id)}>
              <TextSmall>Удалить</TextSmall>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
