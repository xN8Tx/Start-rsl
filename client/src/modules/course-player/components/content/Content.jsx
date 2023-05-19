import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Comments from '../../../../components/comments/comments/Comments';
import Player from '../player/Player';
import Rating from '../rating/Rating';

import './Content.css';

export default function Content() {
  const { video } = useParams();
  const rating = useSelector(state => state.course.entities.rating);
  const userId = useSelector(state => state.myUser.entities.id);
  
  const isRating = rating.filter(el => el.userId === userId);
  
  return (
    <div className="player-content df-column df-start ob-gap">
      <Player />
      <Comments />
      { isRating.length === 0 && video > 1 && <Rating/> }
    </div>
  );
}
