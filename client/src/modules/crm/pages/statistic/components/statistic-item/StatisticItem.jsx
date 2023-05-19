import React from 'react';

import HeadingSecond from '../../../../../../ui/heading/heading-second/HeadingSecond';
import TextMain from '../../../../../../ui/text/text-main/TextMain';

import './StatisticItem.css';

export default function StatisticItem({title, info}) {
  return (
    <div className="statistic-item df-column df-center is-gap">
      <HeadingSecond>{info}</HeadingSecond>
      <TextMain>{title}</TextMain>
    </div>
  );
}
