import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HeadingThird from '../../../../ui/heading/heading-third/HeadingThird';
import TextMain from '../../../../ui/text/text-main/TextMain';

import './PlayerDescription.css';

export default function PlayerDescription({title, description}) {
  const { video } = useParams();
  const entities = useSelector(state => state.course.entities);
  
  return (
    <div className="w-100 df-column df-start ixs-gap">
      <HeadingThird>{entities.material[video - 1].name}</HeadingThird>
      <div className="player-description__divider"></div>
      <TextMain>{entities.material[video - 1].type}</TextMain>
    </div>
  );
}
