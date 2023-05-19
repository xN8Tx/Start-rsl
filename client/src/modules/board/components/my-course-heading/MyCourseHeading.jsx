import React from 'react';

import HeadingSecond from '../../../../ui/heading/heading-second/HeadingSecond';
import TextMain from '../../../../ui/text/text-main/TextMain';
import TextSecond from '../../../../ui/text/text-second/TextSecond';

import './MyCourseHeading.css';
import LazyImg from '../../../../ui/img/LazyImg';

export default function MyCourseHeading({ cover, name, level, status }) {
  return (
    <div className="board-myCourse__row df df-c-sb">
      <div className="board-myCourse__item df df-c-s is-gap">
        <div className="board-myCourse__item_cover">
          <LazyImg
            src={cover}
            alt="Image"
          />
        </div>
        <div className="board-myCourse__item_title">
          <HeadingSecond>{name}</HeadingSecond>
          <TextMain>{level}</TextMain>
        </div>
      </div>
      <div className="board-myCourse__item df df-c-e is-gap">
        <div className="board-myCourse__item_status df-column df-center">
          <TextSecond>{status}</TextSecond>
          <div className="board-myCourse__up_lines">
            <span className="board-myCourse__line_first"></span>
            <span className="board-myCourse__line_second" style={{width: status}}></span>            
          </div>
        </div>
      </div>
    </div>
  );
}
